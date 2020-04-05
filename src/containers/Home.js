import React, { Fragment, useState ,useEffect} from "react";
import Rooms from "../components/Rooms";
import WrapperComponent from "../hoc/WrapperComponent";
import {useDispatch,useSelector} from "react-redux";
const Home = (props) => {
    const [roomsAvailable, setRooms] = useState([]);
    const dispatch = useDispatch();
    const rooms = useSelector(state => state.house.rooms);
    const actionCretorToVerifyThunk = () => {
        return {
            type: "ALL_ROOMS"
        }
    }
    useEffect(()=>{
        setRooms(rooms);
    },[rooms])
    const buttonClicked = (event) => {
        dispatch(actionCretorToVerifyThunk())
    }
    return (
        <Fragment>
            <Rooms rooms={roomsAvailable} showAllRooms={buttonClicked} />
        </Fragment>
    )


}
export default WrapperComponent(Home);