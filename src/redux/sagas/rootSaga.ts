import { takeLatest, all, fork } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { handleGetTodo } from "./handlers/todo";
import { getUser } from "../slices/userSlice";
import { getTodo } from "../slices/todoSlice";

function* getTodoSaga() {
  yield takeLatest(getTodo.type, handleGetTodo);
}

function* getUserSaga() {
  yield takeLatest(getUser.type, handleGetUser);
}

export function* watcherSaga() {
  yield all([fork(getTodoSaga), fork(getUserSaga)]);
}
