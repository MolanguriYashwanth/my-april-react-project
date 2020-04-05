
import { put ,takeEvery,delay} from 'redux-saga/effects';
function* addRoomToStore(action) {
  yield delay(4000);
  yield put({type:"ADD_ROOM_HOUSE_ASYNC",value:action.value});
}
export function* watchAddRoom(){
    yield takeEvery("ADD_ROOM_HOUSE",addRoomToStore)
} 