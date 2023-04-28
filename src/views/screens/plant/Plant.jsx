/** React Native */
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";
/** React */
import React,{ useEffect, useLayoutEffect, useState } from "react";
/** Plugin */
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { ShoppingCartIcon } from "react-native-heroicons/outline";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";
/** Component */
import { Header } from "../../components";
/** Helper */
import { priceParser } from "../../../_helpers/helpers";
/** Constants */
import { increment_container_path, decrement_container_path } from "../../../_constants/constants";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { PlantActions } from "../../../_actions/plant.actions";
import { CartActions } from "../../../_actions/cart.actions";
/** Styling */
import { plant_styling } from "./plant.styles";
import { COLORS } from "../../../_constants/constants.styles";

const { content_container, plant_type_text,image_container,
        plant_image, item_description, controls_container,
        quantity_text, increment_container, decrement_container,
        add_to_cart_btn, cart_icon, add_cart_btn_text,
        add_cart_btn_price, decrement_btn, increment_btn,
    } = plant_styling;

const Plant = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { plant: { selected_plant }} = useSelector(state => state);
    const { 
            item_name,
            item_img,
            item_price,
            quantity,
            plant_type,
            id,
            description,
            added_to_cart,
            original_price,
        } = selected_plant;
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const addToCart = () => {
        if(added_to_cart){
            const new_formatted_price = priceParser(quantity, original_price);

            dispatch(CartActions.updateCartContent({ id, new_quantity: quantity, new_price: new_formatted_price}));

            alert("updated the item");
        } else {
            const formatted_price = priceParser(quantity, item_price);

            dispatch(CartActions.addToCart({ 
                id,
                item_name,
                item_img,
                item_price: formatted_price,
                original_price: item_price,
                quantity,
                plant_type,
                added_to_cart: true,
            }));

            alert("Added Item to Cart Successfully!");
        }
        navigation.navigate("Dashboard");
    }

    const removeItemFromCart = () => {
        dispatch(CartActions.removeFromCart(id));

        alert("Item has been removed from the cart");

        navigation.navigate("Dashboard");
    }
    return (
        <View style={{ flex: 1}}>
            <Header title={item_name} screen={"plant"} />
            <View style={content_container}>
                <Text style={[plant_type_text ]}>
                    {plant_type}
                </Text>
                <LinearGradient 
                    colors={[ "#CCDDF6", COLORS.white]} 
                    style={image_container}
                />
                <Image source={item_img} style={plant_image}/>
                <Text style={item_description}>
                        {description}
                </Text>
                <View style={controls_container}>
                    <ImageBackground
                        source={decrement_container_path}
                        style={decrement_container}
                    >
                        <TouchableOpacity 
                            style={decrement_btn} 
                            onPress={() => dispatch(PlantActions.decrementSelectedPlantQuantity(1))} 
                        >
                            <MinusIcon strokeWidth={7} color={"black"}/>
                        </TouchableOpacity>
                    </ImageBackground>
                    <Text style={quantity_text}>
                        {quantity.toString().padStart(2, "0")}
                    </Text>
                    <ImageBackground
                        source={increment_container_path}
                        style={increment_container}
                    >
                        <TouchableOpacity 
                            style={increment_btn} 
                            onPress={() => dispatch(PlantActions.incrementSelectedPlantQuantity(1))} 
                        >
                            <PlusIcon strokeWidth={7} color={"black"}/>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <TouchableOpacity style={add_to_cart_btn} onPress={(!quantity && added_to_cart) ? removeItemFromCart : addToCart} >
                    <View style={cart_icon}>
                        <ShoppingCartIcon color={COLORS.black}/>
                    </View>
                    <Text style={add_cart_btn_text}>{(!quantity && added_to_cart) ? "Remove from " : "Add to"} Cart</Text>
                    <Text style={add_cart_btn_price}>{(!quantity && added_to_cart) ? "" : String.fromCharCode(8369) + item_price }</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Plant;

// &#8369; 