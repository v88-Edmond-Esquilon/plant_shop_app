import { createSlice } from "@reduxjs/toolkit";
import DashboardServices from "../_services/dashboard.services";

const initialState = {
    active_chip_id: "",
    selected_plant_type: {},
}

export const DashboardManagementReducer = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setSelectedPlant: DashboardServices.setSelectedPlant,
        setActiveChipId: DashboardServices.setActiveChipId,
    }
});

export const {
    setSelectedPlant,
    setActiveChipId
} = DashboardManagementReducer.actions;

export default DashboardManagementReducer.reducer;