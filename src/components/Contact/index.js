




import React from 'react'
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
// import emailjs from '@emailjs/browser'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetter'
import { MapContainer, Marker, TileLayer,Popup } from 'react-leaflet'
import './index.scss'


const Contact = () => {
  const [name, setName] = React.useState("")
  const [subject, setSubject] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  console.log(name,email, message,subject)

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent in the request body
    if (name && subject && email && message) {
      const data = {
        name: name,
        subject: subject,
        email: email,
        message: message,
      };
    
      try {
        const response = await fetch('https://long-rose-chipmunk-yoke.cyclic.app/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        // Check if the request was successful (status code 2xx)
        if (response.ok) {
          console.log('Data sent successfully');
          alert('Data sent successfully');
        } else {
          // If the server returns an error, you can handle it here
          console.error('Error sending data:', response.statusText);
        }
      } catch (error) {
        // Handle any network or other errors that might occur during the fetch
        console.error('Fetch error:', error);
      }
    } else {
      console.log('It is working');
    }
    
    
  };


    const [letterClass, setLetterClass] = useState('text-animate')
    const Form = useRef ()

    useEffect (() => {
         setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
        }, [])

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_5ppwj4s', 'template_1oj0z9b', Form.current, 'iS6TZ2B2KSqmqAItc')
            .then(
              () => {
                alert('Message successfully sent!')
                window.location.reload(false)
              },
              () => {
                alert('Failed to send the message, please try again')
              }
            )
            }

    React.useEffect(()=>{

      

    },[])
    
    return (
        <>
    <div className="container contact-page">
    <div className='text-zone'>
    <h1>
    <AnimatedLetters
     letterClass={letterClass}    
     strArray={['C', 'o', 'n','t','a','c','t',' ','m','e']}
     idx={15}   
    />
    </h1>
    <p>
    I'm very ambitious fullstack developer  looking for a role in
        established IT company with the opportunity  because i'm still berozbar unemployed is any recruitor read this kindly contact with me to work with the latest
        technologies on challenging and diverse projects.
    </p>
    <div className="contact-form">
<form ref={Form} onSubmit={sendEmail}>
<dt>
<li className="half">
<input placeholder="Name"  value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" required />
</li>
<li className="half">

<input
placeholder="Email"
type="email"
name="email"
value={email} onChange={(e)=>setEmail
  (e.target.value)}
required
/>
</li>
<li>
<input placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" name="subject" required />
</li>
<li>
<textarea  placeholder="message" value={message} onChange={(e)=>setMessage
  (e.target.value)} name="message" required></textarea>
</li>
<li>
<input type="submit" onClick={handleFormSubmit} className='flat-button' value="SEND" />
</li>
</dt>
</form>

</div>
</div>

<div className="info-map">
          Hasan Iqbal,
          <br />
          India,
          <br />
         Lucknow <br />
         Uttarpradesh <br />
          <br />
          <span>rooney.khan999@gmail.com</span>
        </div>
        <div  className='map-wrap'>
        <MapContainer center={[26.841984988290466, 80.92672886731158]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[26.841984988290466, 80.92672886731158]}>
              <Popup>Hasan lives here, come over for a cup of tea :</Popup>
            </Marker>
          </MapContainer>

        </div>
</div>

<Loader type="pacman" />

    </>
    )

}


export default Contact



    
   
    