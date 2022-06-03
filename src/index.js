import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CustomCursor
            dimensions={40}
            fill="#FFF"
            strokeWidth={3}
            strokeColor="#8c8c8c"
            smoothness={{
                movement: 0.08,
                scale: 0.9,
                opacity: 0.2,
            }}
            targetOpacity={0.5}
        />
        <App />
    </React.StrictMode>
);
