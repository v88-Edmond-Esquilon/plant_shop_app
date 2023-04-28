import { generateId } from "../_helpers/helpers";

const setSelectedPlant = (state, action) => {
    const item_id = action.payload.id;
    const action_type = action.payload.action_type;
    const data_origin = action.payload.data_origin;
    let selected_plant = null;

    if(action_type === "get_plant"){
        for (const plant_type of data_origin) {
            const item = plant_type.items.find((item) => item.id === item_id);
            if (item) {
                selected_plant = {
                    plant_type: plant_type.name,
                    quantity: 1,
                    item_name: item.item_name,
                    item_price: item.price,
                    item_img: item.img,
                    description: item.description,
                    id: generateId(),
                    added_to_cart: false,
                };
                break;
            }
        }
    } else if (action_type === "update_cart") {
        data_origin.map(item => {
            if(item.id === item_id){
               selected_plant = item;
            }   
        })
    }
    
    state.selected_plant = selected_plant;
};

const decrementSelectedPlantQuantity = (state, action) => {
    let quantity = state.selected_plant.quantity;

    if(quantity > 0){
        state.selected_plant.quantity -= action.payload;
    }
}

const incrementSelectedPlantQuantity = (state, action) => {
    let quantity = state.selected_plant.quantity;

    if(quantity != 99){
        state.selected_plant.quantity += action.payload;
    }
}

const PlantServices = {
    setSelectedPlant,
    decrementSelectedPlantQuantity,
    incrementSelectedPlantQuantity
}

export default PlantServices;