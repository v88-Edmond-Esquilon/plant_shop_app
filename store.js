import { configureStore } from "@reduxjs/toolkit";
import DashboardManagementReducer from "./src/_reducers/dashboard.reducers";
import PlantManagementReducer  from "./src/_reducers/plant.reducers";

const Store = configureStore({
    reducer: {
        dashboard: DashboardManagementReducer,
        plant: PlantManagementReducer,
    }
});

export default Store;