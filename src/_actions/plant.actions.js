import { setSelectedPlant, decrementSelectedPlantQuantity, incrementSelectedPlantQuantity } from "../_reducers/plant.reducers";

export const PlantActions = {
    setSelectedPlant: (params) => {
        return (dispatcher) => {
            dispatcher(setSelectedPlant(params));
        }
    },
    decrementSelectedPlantQuantity: (params) => {
        return (dispatcher) => {
            dispatcher(decrementSelectedPlantQuantity(params));
        }
    },
    incrementSelectedPlantQuantity: (params) => {
        return (dispatcher) => {
            dispatcher(incrementSelectedPlantQuantity(params));
        }
    }
}