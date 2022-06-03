import React, { useEffect, useState } from "react";
import "./App.scss";
import Loader from "./components/Loader";

const Header = React.lazy(() => import("./components/Header"));
const About = React.lazy(() => import("./components/About"));
const Footer = React.lazy(() => import("./components/Footer"));
const Experience = React.lazy(() => import("./components/Experience"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));

export default function App() {
    const [data, setdata] = useState({});
    useEffect(() => {
        (async () => {
            await fetch("/data.json")
                .then((res) => res.json())
                .then((data) => {
                    setdata(data);
                })
                .catch((er) => {
                    alert(er);
                });
        })();
    }, []);

    useEffect(() => {
        const progressPath = document.querySelector(".progress-wrap path");
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";

        const updateProgress = function () {
            const scroll = window.pageYOffset;
            const height =
                document.documentElement.offsetHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;

            if (scroll > 150) {
                document
                    .querySelector(".progress-wrap")
                    .classList.add("active-progress");
            } else {
                document
                    .querySelector(".progress-wrap")
                    .classList.remove("active-progress");
            }
        };
        updateProgress();
        window.addEventListener("scroll", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    }, []);

    const ScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <React.Suspense fallback={<Loader />}>
            <div>
                <Header personal_info={data?.personal_info} />
                <About
                    Image={data?.personal_info?.image}
                    basic_info={data?.basic_info}
                />

                <Projects
                    projects={data.projects}
                    basic_info={data.basic_info}
                />
                <Skills skills={data.skills} basic_info={data.basic_info} />
                <Experience
                    experience={data.experience}
                    basic_info={data.basic_info}
                />
                <Footer personal_info={data.personal_info} />
                <div onClick={ScrollToTop} className="progress-wrap">
                    <span
                        className="iconify"
                        data-icon="clarity:angle-line"
                        data-inline="false"
                    ></span>
                    <svg
                        className="progress-circle"
                        width="100%"
                        height="100%"
                        viewBox="-1 -1 102 102"
                    >
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
            </div>
        </React.Suspense>
    );
}
