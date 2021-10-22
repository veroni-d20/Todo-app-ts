import { call, put } from "redux-saga/effects";
import { axiosUserGet } from "../requests";
import { setUser } from "../../slices/userSlice";
import { SagaReturnType } from "@redux-saga/core/effects";

export function* handleGetUser() {
  try {
    const res: SagaReturnType<typeof axiosUserGet> = yield call(axiosUserGet);
    const data = res.data;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
