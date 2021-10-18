import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
