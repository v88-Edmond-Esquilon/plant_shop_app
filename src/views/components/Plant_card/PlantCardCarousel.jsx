/** React Native */
import { View, Text, Image, TouchableOpacity, Dimensions, Platform } from "react-native";
/** React */
import React from "react";
/** Plugin */
import { useNavigation } from "@react-navigation/native";
import { ShoppingCartIcon } from "react-native-heroicons/outline";
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from "react-native-reanimated";
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





const PlantCardRender = ({ plant_details, index } ) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

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


const PlantCardCarousel = ({ selected_plant_type }) => {
    const screen_width = Dimensions.get('window').width;
    const platform_value_screen = Platform.OS === 'ios' ? 120 : 90;
    const active_item_index = useSharedValue(0);
    

    console.log(active_item_index.value," from carousel");
    return (
        <View>
            <Carousel
                loop
                width={screen_width - platform_value_screen}
                height={Platform.OS === 'ios' ? 482 : 420}
                autoPlay={true}
                data={selected_plant_type?.items}
                autoPlayInterval={2000}
                scrollAnimationDuration={1000}
                renderItem={({ item, index }) => (
                    <PlantCardRender
                        plant_details={item}
                        index={index}
                    />
                )}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 1,
                    parallaxAdjacentItemScale: Platform.OS === 'ios' ? 0.9 : 0.8,
                }}
                snapEnabled={true}
                style={plant_card_carousel_view}
                onSnapToItem={(index) => console.log("active item index", index)}
            />
        </View>
    );
  };
  

export default PlantCardCarousel;

