import { PLANT_TYPES } from "../_constants/constants";


const setSelectedPlant = (state, action) => {
    const plant_id = action.payload;
    let selected_plant = null;

    for (const plantType of PLANT_TYPES) {
        const item = plantType.items.find((item) => item.id === plant_id);
        if (item) {
            selected_plant = {
                plant_type: plantType.name,
                quantity: 1,
                item: item,
            };
            break;
        }
    }
    
    state.selected_plant = selected_plant;

};
  



const PlantServices = {
    setSelectedPlant
}

export default PlantServices;