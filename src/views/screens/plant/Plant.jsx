/** React Native */
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";
/** React */
import React,{ useEffect, useLayoutEffect, useState } from "react";
/** Plugin */
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { ShoppingCartIcon } from "react-native-heroicons/outline";
/** Component */
import { Header } from "../../components";
/** Constants */
import { increment_container_path, decrement_container_path } from "../../../_constants/constants";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
/** Styling */
import { plant_styling } from "./plant.styles";
import { COLORS, FONT } from "../../../_constants/constants.styles";


const { content_container, plant_type_text,image_container,
        plant_image, item_description, controls_container,
        quantity_text, increment_container, decrement_container,
        increment_btn_text, decrement_btn_text, add_to_cart_btn,
        cart_icon, add_cart_btn_text, add_cart_btn_price
    } = plant_styling;

const Plant = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { plant: { selected_plant }} = useSelector(state => state);
    const { item, quantity, plant_type} = selected_plant;
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View style={{ flex: 1}}>
            <Header title={item.item_name} screen={"plant"} />
            <View style={content_container}>
                <Text style={[plant_type_text ]}>
                    {plant_type}
                </Text>
                <LinearGradient colors={[ "#CCDDF6", COLORS.white]} style={image_container}/>
                <Image source={item.img} style={plant_image}/>
                <Text style={item_description}>
                        {item.description}
                </Text>
                <View style={controls_container}>
                    <ImageBackground
                        source={decrement_container_path}
                        style={decrement_container}
                    >
                        <TouchableOpacity>
                            <Text style={decrement_btn_text}>_</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <Text style={quantity_text}>
                        {quantity.toString().padStart(2, '0')}
                    </Text>
                    <ImageBackground
                        source={increment_container_path}
                        style={increment_container}
                    >
                        <TouchableOpacity>
                            <Text style={increment_btn_text}>+</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <TouchableOpacity style={add_to_cart_btn}>
                    <View style={cart_icon}>
                        <ShoppingCartIcon color={COLORS.black}/>
                    </View>
                    <Text style={add_cart_btn_text}>Add To Cart</Text>
                    <Text style={add_cart_btn_price}>&#8369; {item.price}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Plant;