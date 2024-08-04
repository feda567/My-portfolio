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
        I am a software developer at IBM, currently working as an L3 Engineer on the API Connect project.
        With a strong foundation in React and Java, I have honed my skills to craft innovative solutions and deliver
        high-quality results. My role also involves hands-on experience with Docker and Kubernetes, which enhances my
        ability to deploy and manage containerized applications efficiently. Additionally, I have practical experience with 
        Drupal, further broadening my expertise in diverse technologies. As I continue to grow and refine my skills, I am dedicated to leveraging 
        cutting-edge technologies to drive impactful solutions.
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