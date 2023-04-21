
/** React */
import React, { useLayoutEffect } from "react";
/** React Native */
import { View,
        Text,
        ScrollView,
        FlatList,
    } from "react-native";
/** Components */
import { Header, PlantCard, Chips } from "../../components";
/** Plugin */
import { useNavigation } from "@react-navigation/native";
import { PanGestureHandler } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
/** Constants */
import { PLANT_TYPES } from "../../../_constants/constants";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { DashboardActions} from "../../../_actions/dashboard.actions";
/** Styling */
import { dashboard_styles } from "./dashboard.style";
import { COLORS } from "../../../_constants/constants.styles";

const Dashboard = () => {
    const navigation = useNavigation();
    const { dashboard: { selected_plant_type}} = useSelector(state => state);
    const { dashboard_container, chips_scroll_container, collections_text,
            plant_card_carousel_view, footer_rounded_container_left, footer_cart_slider,
            footer_rounded_container_right, middle_notch } = dashboard_styles;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        }); 
    }, []);  

    return (
        <View>
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
                <Text style={collections_text}>{selected_plant_type.name} Collections</Text>
                <FlatList
                    data={selected_plant_type.items}
                    renderItem={(plant, index) => <PlantCard plant_details={plant.item}/>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={plant_card_carousel_view}
                />
                <PanGestureHandler>
                    <Animatable.View style={footer_cart_slider}>
                        <View style={footer_rounded_container_left}>

                        </View>
                        <View style={middle_notch}>

                        </View>
                        <View style={footer_rounded_container_right}>

                        </View>
                    </Animatable.View>
                </PanGestureHandler>
            </View>
        </View>
    )
}

export default Dashboard;

