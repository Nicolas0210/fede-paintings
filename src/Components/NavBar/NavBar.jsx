import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(){
    return(
            <div className="title-btns-container">
                <Link to="/" className="link">
                    <h1 className="landing-title">federica miranda fossati</h1>
                </Link>
                <div className="btns-container">
                    <Link to="/paintings">
                        <button className="btn-paintings">obras</button>
                    </Link>
                    <Link to="/bio">
                        <button className="btn-bio">biografia</button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn-contact">contacto</button>
                    </Link>
                </div>
            </div>
    )
}