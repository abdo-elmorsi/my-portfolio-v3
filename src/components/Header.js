import React, { useState } from "react";
import AnimatedText from "react-animated-text-content";
import Switch from "react-switch";
const Header = ({ personal_info }) => {
    const name = personal_info?.name;
    const title = personal_info?.title;
    const [checked, setchecked] = useState(true);

    const onThemeSwitchChange = () => {
        setchecked((prev) => !prev);
        setTheme();
    };

    const setTheme = () => {
        let body = document.body;
        let newTheme =
            body.getAttribute("data-theme") === "dark" ? "light" : "dark";
        body.setAttribute("data-theme", newTheme);
    };

    return (
        <header
            id="home"
            style={{ height: window.innerHeight - 120, display: "block" }}
        >
            <div className="row aligner" style={{ height: "100%" }}>
                <div className="col-md-12">
                    <div>
                        <span
                            className="iconify header-icon"
                            data-icon="la:laptop-code"
                            data-inline="false"
                        ></span>
                        <br />
                        <h1 className="mb-0">
                            <AnimatedText
                                type="words"
                                animation={{
                                    x: "200px",
                                    y: "-20px",
                                    scale: 1.1,
                                    ease: "ease-in-out",
                                }}
                                className="animated-paragraph"
                                animationType="float"
                                tag="p"
                            >
                                {name}
                            </AnimatedText>
                        </h1>
                        <div className="title-container">
                            <AnimatedText
                                type="chart"
                                animation={{
                                    x: "200px",
                                    y: "-20px",
                                    scale: 1.1,
                                    ease: "ease-in-out",
                                }}
                                className="animated-paragraph title-styles"
                                animationType="rifle"
                                duration={1}
                                tag="p"
                        
                            >
                                {title}
                            </AnimatedText>
                        </div>
                        <Switch
                            checked={checked}
                            onChange={onThemeSwitchChange}
                            offColor="#baaa80"
                            onColor="#353535"
                            className="react-switch mx-auto"
                            width={90}
                            height={40}
                            uncheckedIcon={
                                <span
                                    className="iconify"
                                    data-icon="twemoji:owl"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "20px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            checkedIcon={
                                <span
                                    className="iconify"
                                    data-icon="noto-v1:sun-with-face"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "10px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            id="icon-switch"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
