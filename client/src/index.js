/** Import packages */
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
/** Import files */
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store/index";
/** Import styles */
import "./index.css";

/** Port configuration for axios */
//axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://pi-dogs-main-production-4751.up.railway.app/";

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
