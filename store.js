import { configureStore } from "@reduxjs/toolkit";
import DashboardManagementReducer from "./src/_reducers/dashboard.reducers";
import PlantManagementReducer  from "./src/_reducers/plant.reducers";
import CartManagementReducer from "./src/_reducers/cart.reducers";

const Store = configureStore({
    reducer: {
        dashboard: DashboardManagementReducer,
        plant: PlantManagementReducer,
        cart: CartManagementReducer,
    }
});

export default Store;