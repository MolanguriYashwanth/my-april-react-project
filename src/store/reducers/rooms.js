
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
            default :
            return {
                ...state
            }    
        }
};

export default reducer;