import { setSelectedPlant } from "../_reducers/plant.reducers";

export const PlantActions = {
    setSelectedPlant: (params) => {
        return (dispatcher) => {
            dispatcher(setSelectedPlant(params));
        }
    }
}