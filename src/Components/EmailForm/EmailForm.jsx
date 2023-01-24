import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css'
 
const EmailContactForm = () => {
 const form = useRef();
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_53tj3bm', 'template_m17mj9h', form.current, 'xXThqio7STq5VpjNc')
     .then((result) => {
         alert("Mensaje enviado con exito")
     }, (error) => {
         "No se pudo enviar tu mensaje"
     });
 };
 
 return (
   <form ref={form} onSubmit={sendEmail} className="form-container">
    <div className="name-contact-container">
     <label className="name-label">nombre</label>
     <input type="text" name="user_name" className="form-input"/>
    </div>
    <div className="email-contact-container">
     <label className="email-label">email</label>
     <input type="email" name="user_email" className="form-input"/>
    </div>
    <div className="message-contact-container">
     <label className="message-label">mensaje</label>
     <textarea name="message" className="message-input"/>
    </div>
     <input type="submit" value="enviar" className="send-btn"/>
   </form>
 );
};
 
export default EmailContactForm;