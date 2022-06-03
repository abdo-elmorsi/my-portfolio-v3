import React from "react";
import "../scss/loader.scss";
export default function Loader() {
    return (
        <div id="loader-wrapper">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div id="object_two" className="object"></div>
                    <div id="object_four" className="object"></div>

                    <div id="object_six" className="object"></div>
                    <div id="object_eight" className="object"></div>

                    <div id="object_big" className="object"></div>
                </div>
            </div>
        </div>
    );
}
