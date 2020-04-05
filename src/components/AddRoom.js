import React, { useState } from "react";
import { useDispatch } from "react-redux";
const AddRoom = (props) => {
    const dispatch = useDispatch();
    const [roomName,setRoomName]=useState("");
    const addRoomToStore = () => {
        dispatch({type:"ADD_ROOM_HOUSE",value:roomName});
    }
    const setRoomNameHandler =(event)=>{
        setRoomName(event.target.value);
    }
    return (
        <React.Fragment>
            <input type="text"  onChange={(event)=>{setRoomNameHandler(event)}} value={roomName} />
            <button onClick={addRoomToStore}>Add Room</button>
        </React.Fragment>

    )
}
export default AddRoom;