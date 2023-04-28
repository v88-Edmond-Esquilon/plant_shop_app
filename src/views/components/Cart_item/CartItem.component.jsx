/** React Native */
import { 
        View,
        Text,
        Image,
        TouchableOpacity 
    } from "react-native";
/** React */
import React from "react";
/** Plugin */
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
/** Redux */
import { useDispatch, useSelector } from "react-redux";
import { PlantActions } from "../../../_actions/plant.actions";
/** Styling */
import { cart_item_style } from "./cartitem.component.styles";
import { COLORS, FONT } from "../../../_constants/constants.styles";

const { cart_item_container, image_container, item_image,
        item_text_name, item_text_price
    } = cart_item_style;

const CartItem = ({ item_details, is_last_item }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { cart: { cart_contents }} = useSelector(state => state);

    const onClickedItem = () => {
        dispatch(PlantActions.setSelectedPlant({ 
            id: item_details.id,
            action_type: "update_cart",
            data_origin: cart_contents,
        }));
        navigation.navigate("Plant");
    }

    return (
        <TouchableOpacity  style={cart_item_container(is_last_item)} onPress={onClickedItem}>
            <LinearGradient colors={[ "#CCDDF6", COLORS.white]} style={image_container}/>
            <Image source={item_details.item_img} style={item_image}/>
            <View style={{ position: "relative", left: 90}}>
                <Text style={item_text_name} numberOfLines={1} ellipsizeMode="tail">
                    {item_details.item_name}
                </Text>
                <Text>
                    {`${item_details.quantity} piece${item_details.quantity > 1 ? "s" : ""}`}
                </Text>
            </View>
            <View style={item_text_price}>
                <Text style={{ fontFamily: FONT.satoshi_bold, fontSize: 16}}>
                    &#8369; {item_details.item_price}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CartItem;