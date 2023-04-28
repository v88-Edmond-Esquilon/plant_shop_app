/** React Native */
import { 
        View,
        Text, 
        Image,
        TouchableOpacity,
        Dimensions, 
        Platform,
    } from "react-native";
/** React */
import React from "react";
/** Plugin */
import { useNavigation } from "@react-navigation/native";
import { ShoppingCartIcon } from "react-native-heroicons/outline";
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from "react-native-reanimated";
/** Constants */
import {PLANT_TYPES} from "../../../_constants/constants"
/** Styling */
import { plant_card_styling } from "./plantcardcarousel.component.styles";
import { COLORS } from "../../../_constants/constants.styles";
/** Redux */
import { useDispatch } from "react-redux";
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
        dispatch(PlantActions.setSelectedPlant({ 
            id: plant_details?.id,
            action_type: "get_plant",
            data_origin: PLANT_TYPES,
        }));
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
                <Text style={[add_cart_label_btn, {marginLeft: "auto"}]}>
                     &#8369;{plant_details.price}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const PlantCardCarousel = ({ selected_plant_type }) => {
    const screen_width = Dimensions.get('window').width;
    const platform_value_screen = Platform.OS === 'ios' ? 120 : 90;
    const active_item_index = useSharedValue(0);
    
    return (
        <View>
            <Carousel
                loop
                autoPlay={true}
                mode="parallax"
                autoPlayInterval={2000}
                scrollAnimationDuration={1000}
                width={screen_width - platform_value_screen}
                style={plant_card_carousel_view}
                snapEnabled={true}
                height={Platform.OS === 'ios' ? 482 : 420}
                modeConfig={{
                    parallaxScrollingScale: 1,
                    parallaxAdjacentItemScale: Platform.OS === 'ios' ? 0.9 : 0.8,
                }}
                data={selected_plant_type?.items}
                renderItem={({ item, index }) => (
                    <PlantCardRender
                        plant_details={item}
                        index={index}
                    />
                )}
                // onSnapToItem={(index) => console.log("active item index", index)}
            />
        </View>
    );
  };
  

export default PlantCardCarousel;

