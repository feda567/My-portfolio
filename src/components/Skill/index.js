import React, { useEffect, useState } from 'react';
import './index.scss';
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetter';

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
      setLoaded(true); // Set loaded to true after animation
    }, 1000);
  }, []);

  return (
    <>
      {!loaded && <Loader type="pacman" />} {/* Show loader if not loaded */}
      {loaded && (
        <div className="skill-page">
          <div className='my-container'>
            <div className="my-text-zone">
              {/* text animation */}
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={[
                    'S',
                    'k',
                    'i',
                    'l',
                    'l',
                    ' ',
                    'E',
                    'x',
                    'p',
                    'e',
                    'r',
                    'i',
                    'e',
                    'n',
                    'c',
                    'e'
                  ]}
                  idx={15}
                />
              </h1>
              <p>
                Expert in front-end development including technologies like
                <b> Kubernetes, HTML5, CSS3, JavaScript, React, Bootstrap, Python, Java etc.</b>
                <p>
                  I'm not a designer but I have a good sense of aesthetics, and
                  experience in responsive, mobile-first web design. I put special effort
                  into optimizing my code and providing the best user experience.
                </p>
                I would
                love to give you any kind of support also after the project's completion.
                I guarantee a commitment during work on your project.
              </p>
            </div>
            {/* tgcloud */}
            <div>
              <TagCloud
                className='tg-container'
                options={(w) => ({
                  radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                  maxSpeed: "fastest",
                })}
                onClick={(tag, ev) => alert(tag)}
                onClickOptions={{ passive: true }}
              >
                {[
                  "VSCode",
                  "Kubernetes",
                  "React",
                  "Python",
                  "Java",
                  "Figma",
                  "Java",
                  "Nodejs",
                  "Javascript",
                  "Html",
                  "Css",
                ]}
              </TagCloud>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Skill;
