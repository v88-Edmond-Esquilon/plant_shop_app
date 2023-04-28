/** React Native */
import { 
        View,
        Text,
        ImageBackground,
        FlatList,
        Platform,
    } from "react-native";
/** React */
import React, { 
        useLayoutEffect,
        useState,
        useMemo, 
    } from "react";
/** Component */
import { CartItem } from "../../components";
/** Plugin */
import { useNavigation } from "@react-navigation/native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { 
        useAnimatedGestureHandler,
        useAnimatedStyle,
        useSharedValue,
        withTiming,
        Easing,
        runOnJS,
    } from "react-native-reanimated";
import * as Animatable from 'react-native-animatable';
/** Constants */
import { 
        slider_animation,
        cart_content_path,
        cart_controls_path,
    } from "../../../_constants/constants";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "../../../_actions/cart.actions";
/** Styling */
import { cart_styles } from "./cart.styles";
import { FONT } from "../../../_constants/constants.styles";

const { cart_container, cart_list_container, cart_controls_container,
    cart_list_item, cart_controls, delivery_fee_text,
    total_amount_text, swipe_payment_button, payment_swiper,
    swiper_image, swiper_payment_text
} = cart_styles;

const Cart = () => {
    const navigation = useNavigation();
    const slider_x_axis = useSharedValue(0);
    const dispatch = useDispatch();
    const slider_btn_container_width = Platform.OS === "android"? 259 : 342;
    let [is_paid, setIsPaid] = useState(false);
    const { cart: { cart_contents }} = useSelector(state => state);

    const total_price = cart_contents.reduce((acc, item) => {
        return acc + item.item_price;
    }, 0).toFixed(2);
      
     useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        }); 
    }, []);  

    const random_delivery_fee = useMemo(() => {
        return (Math.random() * (50.99 - 12.99) + 12.99).toFixed(2);
    }, []);

    const paymentSuccess = () => {
        let count = 25;

        dispatch(CartActions.onPaymentSuccess());

        alert('Payment Successful');
       
        const interval = setInterval(() => {
            count--;

            if (count === 0) {
                clearInterval(interval);
                setIsPaid(false);
                slider_x_axis.value = -1;
            }
        }, 100);
    };
      
    const slideGesture = useAnimatedGestureHandler({
        onActive: (event) => {
            slider_x_axis.value = event.translationX;

            if(slider_x_axis.value > slider_btn_container_width / 2 - 10){
                slider_x_axis.value = (Platform.OS === "android") ? 160 : 213;
            } else if(slider_x_axis.value < 0) {
                slider_x_axis.value = -1;
            }
        },
        onEnd: (event) => {
            const gesture_velocity = event.velocityX;
            const slider_btn_width = slider_btn_container_width / 2 - 10;
            const platform_value = Platform.OS === "android" ? 160 : 213;
            const platform_velocity_value = Platform.OS === "android"? 2300 : 500;
            let slider_value;
            
            switch(true) {
                case gesture_velocity > platform_velocity_value:
                    /** Payment Success */
                    slider_value = platform_value;
                    runOnJS(setIsPaid)(true);
                    runOnJS(paymentSuccess)();
                    break;
            
                case gesture_velocity < -platform_velocity_value:
                    /** Reset */
                    slider_value = -1;
                    runOnJS(setIsPaid)(false);
                    break;
            
                case slider_x_axis.value > slider_btn_width || gesture_velocity < -platform_velocity_value:
                    /** Payment Success */
                    slider_value = platform_value;
                    runOnJS(setIsPaid)(true);
                    runOnJS(paymentSuccess)();
                    break;
            
                default:
                    /** Reset */
                    runOnJS(setIsPaid)(false);
                    slider_value = -1;
            }
            
            slider_x_axis.value = withTiming(slider_value, {easing: Easing.linear});
        }
    });

    const payment_slider_animation = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(slider_x_axis.value, { duration: Platform.OS === "android"? 20 : 100, easing: Easing.linear})}]
    }));

    return (
        <View style={cart_container}>
            <ImageBackground source={cart_content_path} style={cart_list_container}>
                <View style={cart_list_item}>
                    <FlatList
                        horizontal={false}
                        alwaysBounceVertical={true}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        data={cart_contents}
                        renderItem={({ item, index }) => <CartItem item_details={item} is_last_item={index === cart_contents.length - 1} />}
                    />
                </View>
                <View style={cart_controls_container}>
                    <ImageBackground source={cart_controls_path} style={cart_controls}>
                        <View style={delivery_fee_text}>
                            <Text style={{ fontFamily: FONT.satoshi_regular, fontSize: 16}}>Delivery Amount</Text>
                            <Text style={{ fontFamily: FONT.satoshi_bold, fontSize: 20}}>
                                &#8369; {cart_contents.length? random_delivery_fee : "0.00"}
                            </Text>
                        </View>
                        <View style={total_amount_text}>
                            <Text style={{ fontFamily: FONT.satoshi_bold, fontSize: 18}}>Total Amount</Text>
                            <Text style={{ fontFamily: FONT.satoshi_bold, fontSize: 24}}>&#8369; {total_price}</Text>
                        </View>
                        <View style={swipe_payment_button}>
                            <Text style={swiper_payment_text(is_paid)}>{`${is_paid? "Paid Successfully" : "Make Payment"}`}</Text>
                            <PanGestureHandler onGestureEvent={slideGesture}>
                                <Animated.View style={[payment_swiper, payment_slider_animation]}>
                                    <Animatable.Image
                                        easing="linear"
                                        iterationCount="infinite"
                                        duration={2000}
                                        source={require("../../../../assets/icons/payment_swiper.png")}
                                        style={swiper_image}
                                        animation={slider_animation}
                                    />
                                </Animated.View>
                            </PanGestureHandler>
                        </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Cart;