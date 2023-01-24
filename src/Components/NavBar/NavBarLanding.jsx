import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarLanding.css';

export default function NavBar(){
    return(
            <div className="title-btns-container-landing">
                <Link to="/" className="link-landing">
                    <h1 className="landing-title-landing">federica miranda fossati</h1>
                </Link>
                <div className="btns-container-landing">
                    <Link to="/paintings">
                        <button className="btn-paintings-landing">obras</button>
                    </Link>
                    <Link to="/bio">
                        <button className="btn-bio-landing">biografia</button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn-contact-landing">contacto</button>
                    </Link>
                </div>
            </div>
    )
}