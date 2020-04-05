import React from "react";
const Rooms = (props) =>{
    let template = props.rooms.map((eachRoom)=>{
        return <li key={eachRoom.id}>{eachRoom.value}</li>
    });
    return (<div>
        <ul>
            {template}
        </ul>
        <button onClick={props.showAllRooms}>Rooms Button</button>
    </div>)
}

export default Rooms;