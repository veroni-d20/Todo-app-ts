import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { watcherSaga } from "./sagas/rootSaga";
import createSagaMiddleware from "redux-saga";
import todoSlice from "./slices/todoSlice";
import userSlice from "./slices/userSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  todos: todoSlice,
  users: userSlice,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(watcherSaga);

export default store;
