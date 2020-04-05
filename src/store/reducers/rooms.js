
const initialState = {
    rooms: [],
}
const reducer = (state=initialState,action)=>{
        switch(action.type){
            case "ALL_ROOMS":
                const rooms = [{
                    "id": "1",
                    "value": "Hall"
                }, {
                    "id": "2",
                    "value": "Kitchen"
                },
                {
                    "id": "3",
                    "value": "Dining Room"
                }];
              return {
                    ...state,
                    rooms:rooms
                }
            case "REMOVE_ROOM":
            let newRooms = state.rooms.filter((each)=>each.id!==action.key);
                return {
                    ...state,
                    rooms:newRooms
                }  
            case "ADD_ROOM_HOUSE_ASYNC":
                return {
                    ...state,
                    rooms:state.rooms.concat({id:Math.random(),value:action.value})
                }      
            default :
            return {
                ...state
            }    
        }
};

export default reducer;