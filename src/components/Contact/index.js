import React from 'react'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetter'
import './index.scss'
import './github.svg'

const Contact = () => {
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
        strArray={['C', 'o', 'n','t','a','c ','t',' ','m','e']}
        idx={15}
        />
        </h1>
       
        <p>
        Feel free to reach out via email for any inquiries or collaborations -
        I'm always eager to connect and explore new opportunities.
        </p>
        
        <a href="https://github.com/feda567">
        <img src={require('./github.svg').default} alt="GitHub" className='image' />
        </a>
        <a href="https://www.linkedin.com/in/feda-salim-a9a382218/">
        <img src={require('./linkedin.svg').default} alt="GitHub" className='image' />
        </a>
        <a href="mailto:fedasalim567@gmail.com">
        <img src={require('./envelope.svg').default} alt="GitHub" className='image' />
        </a>
        <img src={require('./chat.svg').default} alt="Phone" className="phone-image" />

        </div>
        </div>
        <Loader type="pacman" />
      </>
        )
}




export default Contact



    
   
    