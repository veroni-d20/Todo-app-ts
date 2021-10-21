import { call, put } from "redux-saga/effects";
import { axiosGet } from "../requests";
import { setUser } from "../../slices/userSlice";
import { SagaReturnType } from "@redux-saga/core/effects";

export function* handleGetUser() {
  try {
    const res: SagaReturnType<typeof axiosGet> = yield call(axiosGet);
    const { data } = res;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
