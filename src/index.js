import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "./helpers/redux/reducer";
import { legacy_createStore as createStore } from "redux";

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
);
