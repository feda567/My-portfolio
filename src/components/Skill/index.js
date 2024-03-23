import React, { useEffect, useState } from 'react';
import './index.scss';
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetter'

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
    <div   className="skill-page">

      <div className='my-container'>

      <div className="my-text-zone">
        
        {/* text animation */}

        <h1><AnimatedLetters
        letterClass={letterClass}
        strArray={[ 'S',
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
        'e']}
        idx={15}
        /></h1>
        <p>
          Expert in front-end development including technologies like 
          <b>HTML5, CSS3, JavaScript, React, Bootstrap, Python, Java, Mysql etc.
            </b> <p>I'm not a designer but I have a good sense of aesthetics, and 
            experience in responsive, mobile-first web design. I put special effort 
            into optimizing my code and providing the best user experience.</p>
 I would 
            love to give you any kind of support also after the project's completion. 
            I guarantee a commitment during work on your project.
        </p>
      </div>

      {/* tgcloud */}
     <div >

      <TagCloud
      className='tg-container'
      
        options={(w) => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "medium",
        })}
        onClick={(tag, ev) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
          "VSCode",
          "TypeScript",
          "React",
          "Python",
          "Java",
          "Mysql",
          "Mongodb",
          "Nodejs",
          "Expressjs",
          "Html",
          "Css",
        ]}
      </TagCloud>
      </div>
     
      </div>
 </div>

 <Loader type="pacman"/>
 </>
   
  )
}

export default Skill;
