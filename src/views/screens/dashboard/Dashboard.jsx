
/** React */
import React, { useLayoutEffect } from "react";
/** React Native */
import { View,
        Text,
        ScrollView,
        Platform,
        useWindowDimensions
    } from "react-native";
/** Components */
import { Header,
        PlantCardCarousel,
        Chips,
        DashboardFooter
    } from "../../components";
/** Screen */
import Cart from "../Cart/Cart";
/** Plugin */
import { useNavigation } from "@react-navigation/native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler,
                    useAnimatedStyle,
                    useSharedValue,
                    withTiming,
                    Easing 
                } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
/** Constants */
import { PLANT_TYPES } from "../../../_constants/constants";
/** Redux */
import { useSelector } from "react-redux";
/** Styling */
import { dashboard_styles } from "./dashboard.style";
import { COLORS, FONT } from "../../../_constants/constants.styles";

const { dashboard_container, chips_scroll_container, collections_text,
        footer_notch_top, footer_notch_bottom, footer,
        cart_header, cart_header_counter
    } = dashboard_styles;

const Dashboard = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const dashboard_y_axis = useSharedValue(height);
    const { dashboard: { selected_plant_type }, cart: { cart_contents }} = useSelector(state => state);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        }); 
    }, []); 
    
    /** Get gesture Y Axis locations */
    const swipeUpGesture = useAnimatedGestureHandler({
        onActive: (event) => {
             dashboard_y_axis.value = event.absoluteY;
        },
        onEnd: (event) => {
            const gesture_velocity = event.velocityY;
            let dashboard_y_axis_value;
          
            switch (true) {
                case gesture_velocity < -500:
                    /** Change screens */
                    dashboard_y_axis_value = 0;
                    break;
            
                case gesture_velocity > 500:
                    /** Reset */
                    dashboard_y_axis_value = height;
                    break;
            
                case dashboard_y_axis.value < height / 2 || gesture_velocity < -500:
                    /** Change screens */
                    dashboard_y_axis_value = 0;
                    break;
            
                default:
                    /** Reset */
                    dashboard_y_axis_value = height;
                    break;
            }
          
            dashboard_y_axis.value = withTiming(dashboard_y_axis_value, { easing: Easing.linear });
        }
          
    })

    const dashboard_container_animation = useAnimatedStyle(() => ({
        transform: [{
                translateY: withTiming(dashboard_y_axis.value - height,
                { duration: Platform.OS === "android"? 0 : 100, easing: Easing.linear}) 
            }
        ],
    }));
      
    return (
        <>
            {/* Dashboard */}
            <Animated.View style={[dashboard_container_animation, {zIndex: 100, position: "relative"}]}>
                <Header screen={"dashboard"}/>
                <View style={ dashboard_container }>
                    <ScrollView 
                        horizontal={ true } 
                        showsHorizontalScrollIndicator={ false }
                        contentContainerStyle={ chips_scroll_container }
                    >
                        {PLANT_TYPES.map((plant) => (
                            <Chips key={plant.id} plant={plant}/>
                        ))}
                    </ScrollView>
                    <Text style={collections_text}>
                        {selected_plant_type.name} Collections
                    </Text>
                    <PlantCardCarousel selected_plant_type={selected_plant_type}/>
                    <PanGestureHandler onGestureEvent={swipeUpGesture}>
                        <Animated.View style={{ alignItems: "center"}}>
                            <LinearGradient colors={[ COLORS.secondary, "white"]} style={footer}>
                                <View 
                                    style={footer_notch_top} 
                                    hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                                />
                                <DashboardFooter/>
                                <View style={cart_header}>
                                    <Text style={{ fontFamily: FONT.satoshi_bold, fontSize: 32}}>Cart</Text>
                                    <View 
                                        style={cart_header_counter}
                                        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                                    >
                                        <Text style={{ fontFamily: FONT.satoshi_bold, fontSize: 24}}>
                                            {cart_contents.length}
                                        </Text>
                                    </View>
                                </View>
                            </LinearGradient>
                            <View style={footer_notch_bottom} hitSlop={{top: 30, bottom: 30, left: 20, right: 20}}/>
                        </Animated.View>
                    </PanGestureHandler>
                </View>
            </Animated.View>
            {/* Cart */}
            <Cart/>
        </>
    )
}

export default Dashboard;

