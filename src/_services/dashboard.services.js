
const setSelectedPlant = ( state, action ) => {
    state.selected_plant_type = action.payload; 
}

const setActiveChipId = ( state, action ) => {
    state.active_chip_id = action.payload.selected_chip_id
}

const DashboardServices = {
    setSelectedPlant,
    setActiveChipId,
}
export default DashboardServices;