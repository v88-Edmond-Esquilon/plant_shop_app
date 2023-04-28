/** React Native */
import { View, Text, ImageBackground, Image } from "react-native";
/** React */
import React from "react";
/** Constants */
import { PLANT_TYPES } from "../../../_constants/constants";
import { FONT } from "../../../_constants/constants.styles";
/** Redux */
import { useSelector } from "react-redux";
/** Styling */
import { dashboard_footer_styles } from "./dashboardfooter.component.styles";

const {  background_footer_image, cart_counter_container, cart_counter_text,
         image_plant_stack,image_stack_container
    } = dashboard_footer_styles;

const DashboardFooter = () => {
    const { cart: { cart_contents } } = useSelector(state => state);

    return (
        <ImageBackground 
            source={require("../../../../assets/custom_containers/dashboard_footer.png")} 
            style={background_footer_image}
        >
            <View style={cart_counter_container}>
                <Text style={cart_counter_text}>
                    {cart_contents?.length}
                </Text>
            </View>
            <View style={{marginLeft: 16}}>
                <Text style={{ fontFamily: FONT.satoshi_bold, fontSize: 20}}>
                    Cart
                </Text>
                <Text style={{ fontFamily: FONT.satoshi_regular, fontSize: 14}}>
                    {`${cart_contents?.length} Item${cart_contents?.length > 1 ? "s" : ""}`}
                </Text>
            </View>
            <View style={image_stack_container}>
                { cart_contents.slice(0, 4).map(({ item_img, id }, index) => (
                    <Image source={item_img} 
                        style={[
                            image_plant_stack,
                            {
                                zIndex: PLANT_TYPES[0].items.length - index,
                                marginLeft: index !== 0 ? -20 : 0,
                            },
                        ]}
                        key={id}
                    />
                ))}
                { cart_contents.length > 4 && <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>...</Text> }
            </View>

        </ImageBackground>
    )
}

export default DashboardFooter;