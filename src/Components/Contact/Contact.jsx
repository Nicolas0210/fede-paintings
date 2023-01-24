import React from 'react';
import './Contact.css'
import EmailContactForm from '../EmailForm/EmailForm';
import NavBar from '../NavBar/NavBar';
import { ReactComponent as InstagramImg } from './icons8-instagram.svg';
import { ReactComponent as WhatsappImg } from './icons8-whatsapp.svg';
import { ReactComponent as GmailImg } from './icons8-gmail.svg';

export default function Contact(){
    return(
        <div>      
            <NavBar/>
            <div className="photo-links-container">
                <div className="form-photo-container">
                    <EmailContactForm/>     
                </div>
                <div className="network-container">
                    <a href="https://api.whatsapp.com/send?phone=5492804665639&text=Hola! Me gustaria consultarte sobre una obra." target="_blank" rel="noreferrer" className="network-icons"><WhatsappImg/></a>  
                    <a href="https://www.instagram.com/ffedericamiranda/" target="_blank" rel="noreferrer" className="network-icons"><InstagramImg/></a>      
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdkQVJKblQrrkwxfGNNZcNTRSzlSrbbFbHKmlVJkhZNCxLpGjMcBsRwrPWlcgKLMjRRBq" target="_blank" rel="noreferrer" className="network-icons"><GmailImg/></a>   
                </div>
            </div>
        </div>
    )
}