import ReactDOM from "react-dom";
import React from "react";

import TopLevelApp from "./js/components/TopLevelApp";

import 'normalize.css';
import './css/my-globals.css';

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<TopLevelApp />, wrapper) : false;