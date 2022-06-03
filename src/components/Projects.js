import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = ({ projects, basic_info }) => {
    const [state, setstate] = useState({ deps: {}, detailsModalShow: false });

    const detailsModalShow = (data) => {
        setstate({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () =>
        setstate({ detailsModalShow: false, deps: {} });
    if (projects && basic_info) {
        var sectionName = basic_info.section_name.projects;
        var Projects = projects.map(function (project) {
            return (
                <div
                    className="col-sm-12 col-md-6 col-lg-4"
                    key={project.title}
                    style={{ cursor: "pointer" }}
                >
                    <span className="portfolio-item d-block">
                        <div
                            className="foto"
                            onClick={() => detailsModalShow(project)}
                        >
                            <div>
                                <img
                                    src={project?.images[0]}
                                    alt="projectImages"
                                    height="230"
                                    style={{
                                        marginBottom: 0,
                                        paddingBottom: 0,
                                        position: "relative",
                                    }}
                                />
                                <span className="project-date">
                                    {project?.startDate}
                                </span>
                                <br />
                                <p className="project-title-settings mt-3">
                                    {project.title}
                                </p>
                            </div>
                        </div>
                    </span>
                </div>
            );
        });
    }

    return (
        <section id="portfolio">
            <div className="col-md-12">
                <h1 className="section-title" style={{ color: "black" }}>
                    <span>{sectionName}</span>
                </h1>
                <div className="col-md-12 mx-auto">
                    <div className="row mx-auto">{Projects}</div>
                </div>
                <ProjectDetailsModal
                    show={state.detailsModalShow}
                    onHide={detailsModalClose}
                    data={state.deps}
                />
            </div>
        </section>
    );
};

export default Projects;