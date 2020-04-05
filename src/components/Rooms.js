import React from "react";
import {useDispatch} from "react-redux";
const Rooms = (props) =>{
    const dispatch = useDispatch();
    const removeRoom = (id)=>{
       return dispatch({type:"REMOVE_ROOM",key:id})
    };
    const removeRoomAsyn = (id)=>{
        return dispatch =>{
            setTimeout(()=>{
                dispatch(removeRoom(id));
            },3000);
        }
    }
    const removeButtonHandler = (id)=>{
        dispatch(removeRoomAsyn(id));
    }
    let template = props.rooms.map((eachRoom)=>{
        return <li key={eachRoom.id} onClick={()=>(removeButtonHandler(eachRoom.id))}>{eachRoom.value}</li>
    });
    return (<div>
        <ul>
            {template}
        </ul>
        <button onClick={props.showallrooms}>Rooms Button</button>
    </div>)
}

export default Rooms;