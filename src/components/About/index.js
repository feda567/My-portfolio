import { useEffect, useState } from 'react'
import './index.scss' 
import AnimatedLetters from '../AnimatedLetter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {
 const [letterClass, setLetterClass] = useState('text-animate')

   useEffect (() => {
     setTimeout(() => {
    setLetterClass('text-animate-hover')
    }, 4000)
      }, [])

 return (

  <>
        <div className="container about-page">
        <div className="text-zone">
        <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={['A', 'b', 'o','u','t',' ','m','e']}
        idx={15}
        />
        </h1>
        <p>
        I'm a skilled software developer proficient in React and Java, 
        dedicated to crafting innovative solutions. Currently interning at IBM, 
        I'm gaining hands-on experience and honing my expertise on cutting-edge projects.
         My journey includes practical exposure to Kubernetes, enhancing my ability to deploy and manage containerized applications efficiently.
   </p>
   <p>
If I need to define myself in one sentence that would be a family
person who values honesty and punctuality, passionate about sports and technology!!!
</p>
       
        </div>
         <div className="stage-cube-cont">
         <div className="cubespinner">
           <div className="face1">
             <FontAwesomeIcon icon={faAngular} color="#DD0031" />
           </div>
           <div className="face2">
             <FontAwesomeIcon icon={faHtml5} color="#F06529" />
           </div>
           <div className="face3">
             <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
           </div>
           <div className="face4">
             <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
           </div>
           <div className="face5">
             <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
           </div>
           <div className="face6">
             <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
           </div>
         </div>
       </div>
     </div>
      <Loader type="pacman" />
      </>
        )
}


export default About