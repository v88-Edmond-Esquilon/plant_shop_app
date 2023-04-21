import { createSlice } from "@reduxjs/toolkit";
import PlantServices from "../_services/plant.services";


const initialState = {
    selected_plant: {},
}

export const PlantManagementReducer = createSlice({
    name: "plant",
    initialState,
    reducers: {
        setSelectedPlant: PlantServices.setSelectedPlant,
    }
});

export const {
    setSelectedPlant
} = PlantManagementReducer.actions;

export default PlantManagementReducer.reducer;