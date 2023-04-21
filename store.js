import { configureStore } from "@reduxjs/toolkit";
import DashboardManagementReducer from "./src/_reducers/dashboard.reducers";

const Store = configureStore({
    reducer: {
        dashboard: DashboardManagementReducer,
    }
});

export default Store;