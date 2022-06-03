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
            </div>
        </React.Suspense>
    );
}
