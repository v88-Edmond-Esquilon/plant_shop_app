import { setSelectedPlant, setActiveChipId } from "../_reducers/dashboard.reducers";


export const DashboardActions = {
    setSelectedPlant: (params) => {
        return (dispatcher) => {
           dispatcher(setSelectedPlant(params));
        }
    },
    setActiveChipId: (params) => {
        return (dispatcher) => {
            dispatcher(setActiveChipId(params));
        }
    }
}