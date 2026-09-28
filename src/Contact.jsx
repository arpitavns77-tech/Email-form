import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4vrgn5j', 'template_5ecy4m9', form.current, {
        publicKey: 'oy1Yxomu5IYWLKRcG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (

    <div>
      <div className='inner-section'>
        
        <div className='Email-section'>
          
          <div className='work'>

            
            
            <form className='defe' ref={form} onSubmit={sendEmail}>
              
               <h1 className='heading'>Send Gmail</h1>
              <label>Name</label><br/>
              <input className='name-section' type="text" name="name" placeholder='name' /><br/>
              <label>Email</label><br/>
              <input className='email-section' type="email" name="email" placeholder='email'  /><br/>
              <label>Message</label><br/>
              <textarea className='message-section' name="message" placeholder='message..' /><br/>
               <input type="checkbox" />
              <label>I agree to the terms</label><br/>
              <input className='send-section' type="submit" value="Send" />
            </form>
            <img className='logo' src="https://1000logos.net/wp-content/uploads/2018/04/Gmail-logo-new.jpg" alt="" />
            
          </div>
          
        </div>
        <div className='design-section'>
          <h2>Welcome back!</h2> <br/>
          <p> you can send email with your email id</p>
          <a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur  <br/>
          labore expedita odit dolore, debitis est architecto officia  <br/>ex animi nesciunt  
          aliquid voluptas, molestias tempora  <br/> molestiae aut, ducimus perferendis obcaecati sint.</a>
        </div>
      </div>
    </div>
  );
};

{/* <FaUserAlt />
<MdEmail /> */}