/** React Native */
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
/** React */
import React,{ useEffect, useLayoutEffect, useState } from "react";
/** Plugin */
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
/** Component */
import { Header } from "../../components";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
/** Styling */
import { plant_styling } from "./plant.styles";
import { COLORS } from "../../../_constants/constants.styles";

const Plant = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { plant: { selected_plant }} = useSelector(state => state);
    const { item, quantity, plant_type} = selected_plant;
    const { content_container, plant_type_text, image_container, plant_image, item_description, controls_container } = plant_styling;
    
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
                    <View>
                        <TouchableOpacity>

                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>{quantity}</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Plant;