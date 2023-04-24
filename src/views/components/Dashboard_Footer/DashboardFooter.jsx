/** React Native */
import { View, Text, ImageBackground, Image } from "react-native";
/** React */
import React from "react";
/** Plugin */

/** Constants */
import { PLANT_TYPES } from "../../../_constants/constants";
import { FONT } from "../../../_constants/constants.styles";
/** Styling */
import { dashboard_footer_styles } from "./dashboardfooter.styles";

const DashboardFooter = () => {
    const {  background_footer_image,
        cart_counter_container, cart_counter_text, image_plant_stack } = dashboard_footer_styles
    
    return (
        <ImageBackground source={require("../../../../assets/custom_containers/dashboard_footer.png")} style={background_footer_image}>
            <View style={cart_counter_container}>
                <Text style={cart_counter_text}>0</Text>
            </View>
            <View style={{marginLeft: 16}}>
                <Text style={{ fontFamily: FONT.satoshi_bold, fontSize: 20}}>Cart</Text>
                <Text style={{ fontFamily: FONT.satoshi_regular, fontSize: 14}}>0 Items</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: "auto", marginRight: 24}}>
                { PLANT_TYPES[0].items.map((item, index) => (
                    <Image source={item.img} 
                        style={[
                        image_plant_stack,
                        {
                            zIndex: PLANT_TYPES[0].items.length - index,
                            marginLeft: index !== 0 ? -30 : 0,
                        },
                        ]} key={index}/>
                ))}
            </View>
        </ImageBackground>
    )
}

export default DashboardFooter;