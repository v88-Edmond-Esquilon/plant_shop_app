import { createSlice } from "@reduxjs/toolkit";
import PlantServices from "../_services/plant.services";


const initialState = {

}

export const PlantManagementReducer = createSlice({
    name: "plant",
    initialState,
    reducers: {

    }
});

export const {

} = PlantManagementReducer.actions;

export default PlantManagementReducer.reducer;