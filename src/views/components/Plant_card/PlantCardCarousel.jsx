/** React Native */
import { View, Text, Image, TouchableOpacity, FlatList, useWindowDimensions, Platform } from "react-native";
/** React */
import React from "react";
/** Plugin */
import { useNavigation } from "@react-navigation/native";
import { ShoppingCartIcon } from "react-native-heroicons/outline";

/** Styling */
import { plant_card_styling } from "./plantcardcarousel.styles";
import { COLORS } from "../../../_constants/constants.styles";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { PlantActions } from "../../../_actions/plant.actions";

const { plant_card_container, image_container, image, item_name,
        item_description, add_to_cart_btn, add_cart_label_btn,
        plant_card_carousel_view,
    } = plant_card_styling;







const PlantCardCarousel = ({ selected_plant_type }) => {


    const navigation = useNavigation();
    const dispatch = useDispatch();


  

    const PlantCardRender = ({ plant_details }, index) => {
        const onAddToCart = () => {
            navigation.navigate("Plant");
            dispatch(PlantActions.setSelectedPlant(plant_details?.id));
        }
        
        return (
            <View style={plant_card_container}>
                <View style={image_container}>
                    <Image source={plant_details.img} style={ image }/>
                </View>
                <Text style={item_name}>{plant_details.item_name}</Text>
                <Text style={item_description}>{plant_details.description}</Text>
                <TouchableOpacity style={add_to_cart_btn} onPress={() => onAddToCart()}>
                    <ShoppingCartIcon color={COLORS.primary} style={{ marginRight: 5}}/>
                    <Text style={add_cart_label_btn}>Add to Cart</Text>
                    <Text style={[add_cart_label_btn, {marginLeft: "auto"}]}> &#8369;{plant_details.price}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <FlatList
                renderItem={(plant, index) => <PlantCardRender plant_details={plant.item} index={index}/>}
                data={selected_plant_type.items}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={plant_card_carousel_view}
            />
        </>
    )
}

export default PlantCardCarousel;

