import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import AnimatedCursor from "react-animated-cursor";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <AnimatedCursor
            className="Cursor"
            innerSize={20}
            outerSize={15}
            color="222, 222, 222"
            outerAlpha={0.8}
            innerScale={0.1}
            outerScale={4}
            outerStyle={{
                zIndex: "1056",
            }}
            clickables={["a", "button", ".link"]}
        />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
