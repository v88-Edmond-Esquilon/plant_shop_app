/** React Native */
import { 
        View,
        Text,
        Pressable 
    } from "react-native";
/** React */
import React, { useState } from "react";
/** Stylings */
import { chip_styles } from "./chips.styles";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { DashboardActions } from "../../../_actions/dashboard.actions";

const Chips = ({ plant }) => {
    const { chip, active_chip, chip_text } = chip_styles;
    const { dashboard: { active_chip_id }} = useSelector(state => state);
    const dispatch = useDispatch();
  
    const [default_active_chip_set, setDefaultActiveChipSet] = useState(false);
  
    const active = active_chip_id === plant.id;
  
    if (!default_active_chip_set && active_chip_id === '') {
        dispatch(DashboardActions.setActiveChipId({selected_chip_id: plant.id}));
        dispatch(DashboardActions.setSelectedPlant(plant));
        setDefaultActiveChipSet(true);
    }
  
    const onSetActiveChip = () => {
        dispatch(DashboardActions.setActiveChipId({selected_chip_id: plant.id}));
        dispatch(DashboardActions.setSelectedPlant(plant));
    }
  
    return (
        <Pressable 
            style={chip} 
            onPress={onSetActiveChip}
        >
            <View style={active ? active_chip : ''}>
                <Text style={chip_text}>{plant.name}</Text>
            </View>
        </Pressable>
    );
}
  

export default Chips;