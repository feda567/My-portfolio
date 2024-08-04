import './index.scss';
import LogoTitle from '../../assets/images/ht.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetter';
import Logo from './Logo';
import Loader from 'react-loaders';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','F','e','d','a',' ','S','a','l','i','m']

    useEffect (() => {
          setTimeout (() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[] )


    return (
        <>
        <div className=" container home-page">
           <div className="text-zone">
            <h1>
               <span className={letterClass}>H</span>
               <span className={`${letterClass} _12`}>i</span> 
               <br /> 
            <span className={`${letterClass} _13`}>I</span> 
            <span className={`${letterClass} _14`}>'m </span> 
       
       <AnimatedLetters letterClass={letterClass}
       strArray={nameArray}
       idx={15} />
        <br />
        </h1> 
        <br/>
        <h2>Frontend developer / DevOps  / Java </h2>
        <Link to="/contact" className='flat-button'> CONTACT ME </Link>

        </div>
        <Logo />
        </div>
        < Loader type="pacman" />
        </>

        );
}


export default Home