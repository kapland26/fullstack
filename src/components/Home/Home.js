import React from 'react';
import logo from './communityBank.svg';
import './Home.css';

export default function Home() {
    return (
        <div className = 'Home'>
            <img src={logo} alt='' />
            <a href={process.env.REACT_APP_LOGIN}>
                <button>Login</button>
            </a>
        </div>
    )
}