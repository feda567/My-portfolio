import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetter";
import projectData from '../../data/project.json';

const Project = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect (() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    const renderProject = (project) => {
        return (
            <div className="images-container">
                {project.project.map((pro, idx) => (
                    <div className="image-box" key={idx}>
                        <img 
                            src={pro.cover}
                            className="project-image"
                            alt="project"
                        />
                        <div className="content">
                            <p className="title">{pro.title}</p>
                            <h4 className="description">{pro.description}</h4>
                            <button
                                className="btn"
                                onClick={() => window.open(pro.url)}
                            >View</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="container project-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"project".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderProject(projectData)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Project;
