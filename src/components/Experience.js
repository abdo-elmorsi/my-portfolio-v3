import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Badge } from "react-bootstrap";
import AnimatedText from "react-animated-text-content";

const Experience = ({ experience, basic_info }) => {
    if (experience && basic_info) {
        var sectionName = basic_info.section_name.experience;
        var work = experience.map(function (work, i) {
            const technologies = work.technologies;
            const mainTechnologies = work.mainTech;

            var mainTech = mainTechnologies.map((technology, i) => {
                return (
                    <Badge pill className="main-badge me-2 mb-2" key={i}>
                        {technology}
                    </Badge>
                );
            });
            var tech = technologies.map((technology, i) => {
                return (
                    <Badge pill className="experience-badge me-2 mb-2" key={i}>
                        {technology}
                    </Badge>
                );
            });
            return (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={work.years}
                    iconStyle={{
                        background: "#AE944F",
                        color: "#fff",
                        textAlign: "center",
                    }}
                    icon={
                        <i className={`fab fa-react experience-icon ${work.years?.includes("present") ? "rotate" : ""}`}></i>
                    }
                    key={i}
                >
                    <div style={{ textAlign: "left", marginBottom: "4px" }}>
                        {mainTech}
                    </div>

                    <h3
                        className="vertical-timeline-element-title"
                        style={{ textAlign: "left" }}
                    >
                        {work.title}
                    </h3>
                    <h4
                        className="vertical-timeline-element-subtitle"
                        style={{ textAlign: "left" }}
                    >
                        <a className="" href={work.url} target="__blank">
                            {work.company}
                        </a>
                    </h4>
                    <div style={{ textAlign: "left", marginTop: "15px" }}>
                        {tech}
                    </div>
                </VerticalTimelineElement>
            );
        });
    }

    return (
        <section id="resume" className="pb-5">
            <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
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
                            duration={1}
                            tag="span"
                        >
                            {sectionName}
                        </AnimatedText>
                    </h1>
                </div>
            </div>
            <div className="col-md-8 mx-auto">
                <VerticalTimeline>
                    {work}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={
                            <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                        }
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;
