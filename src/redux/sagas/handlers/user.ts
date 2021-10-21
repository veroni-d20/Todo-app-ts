import { call, put } from "redux-saga/effects";
import { axiosGet } from "../requests";
import { setUser } from "../../slices/userSlice";
import { SagaReturnType } from "@redux-saga/core/effects";

export function* handleGetUser() {
  try {
    const res: SagaReturnType<typeof axiosGet> = yield call(axiosGet);
    const { id, firstName, lastName } = res.data;
    yield put(setUser({ id: id, firstName: firstName, lastName: lastName }));
  } catch (error) {
    console.log(error);
  }
}
