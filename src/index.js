require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";
// import "@moai/core/dist/bundle.css";
import "./bundle.css";
// import "@moai/core/dist/font/remote.css";

const appElement = document.getElementById("app");

ReactDOM.render(<App />, appElement);
