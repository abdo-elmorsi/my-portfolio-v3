import React from "react";
import AnimatedText from "react-animated-text-content";

const Skills = ({ basic_info, skills }) => {
    if (basic_info && skills) {
        var sectionName = basic_info.section_name.skills;
        var Skills = skills.icons.map(function (skill, i) {
            return (
                <li className="list-inline-item mx-3 my-3" key={i}>
                    <span>
                        <div className="text-center skills-tile">
                            <i
                                className={skill.class}
                                style={{ fontSize: "220%" }}
                            >
                                <p
                                    className="text-center"
                                    style={{
                                        fontSize: "30%",
                                        marginTop: "4px",
                                    }}
                                >
                                    {skill.name}
                                </p>
                            </i>
                        </div>
                    </span>
                </li>
            );
        });
    }

    return (
        <section id="skills">
            <div className="col-md-12">
                <div className="col-md-12">
                    <h1 className="section-title">
                        <AnimatedText
                            type="words"
                            animation={{
                                x: "200px",
                                y: "-20px",
                                scale: 1.1,
                                ease: "ease-in-out",
                            }}
                            className="animated-paragraph"
                            animationType="throw"
                            duration={0.8}
                            tag="span"
                        >
                            {sectionName}
                        </AnimatedText>
                    </h1>
                </div>
                <div className="col-md-12 text-center">
                    <ul className="list-inline mx-auto skill-icon">{Skills}</ul>
                    <span className="text-white">&& More</span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
