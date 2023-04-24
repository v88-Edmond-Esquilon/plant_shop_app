
/** React */
import React, { useLayoutEffect, useRef, useState } from "react";
/** React Native */
import { View,
        Text,
        ScrollView,
        FlatList,
    } from "react-native";
/** Components */
import { Header, PlantCard, Chips, DashboardFooter } from "../../components";
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

const Dashboard = () => {
    const navigation = useNavigation();
    const { dashboard: { selected_plant_type }} = useSelector(state => state);
    const { dashboard_container, chips_scroll_container, collections_text,
            plant_card_carousel_view, } = dashboard_styles;
    

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
                    <Animatable.View >
                        <DashboardFooter/>
                    </Animatable.View>
                </PanGestureHandler>
                
            </View>
        </View>
    )
}

export default Dashboard;

