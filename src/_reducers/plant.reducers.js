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
        decrementSelectedPlantQuantity: PlantServices.decrementSelectedPlantQuantity,
        incrementSelectedPlantQuantity: PlantServices.incrementSelectedPlantQuantity,
    }
});

export const {
    setSelectedPlant,
    decrementSelectedPlantQuantity,
    incrementSelectedPlantQuantity
} = PlantManagementReducer.actions;

export default PlantManagementReducer.reducer;