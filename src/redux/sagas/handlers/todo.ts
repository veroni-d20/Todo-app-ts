import { call, put } from "redux-saga/effects";
import { axiosTodoGet } from "../requests";
import { setTodo } from "../../slices/todoSlice";
import { SagaReturnType } from "@redux-saga/core/effects";

export function* handleGetTodo() {
  try {
    const res: SagaReturnType<typeof axiosTodoGet> = yield call(axiosTodoGet);
    const data = res.data;
    yield put(setTodo(data));
  } catch (error) {
    console.log(error);
  }
}
