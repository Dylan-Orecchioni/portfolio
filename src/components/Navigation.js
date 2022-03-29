import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src='./media/billGates.jpg' alt='profil-pic'></img>
                    <h3>Dylan Orecchioni</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                    <NavLink exact="true" to="/" className={(nav) => (nav.isActive ? "navActive" : "")}>
                        <i className='fas fa-home'></i>
                        <span>Accueil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact="true" to="/competences" className={(nav) => (nav.isActive ? "navActive" : "")}>
                        <i className='fas fa-mountain'></i>
                        <span>Compétences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact="true" to="/cv" className={(nav) => (nav.isActive ? "navActive" : "")}>
                        <i className='fas fa-images'></i>
                        <span>CV</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact="true" to="/contact" className={(nav) => (nav.isActive ? "navActive" : "")}>
                        <i className='fas fa-address-book'></i>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.google.com' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.google.com' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-github'></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.google.com' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.google.com' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-codepen'></i>
                        </a>
                    </li>
                </ul>
                <div className='signature'>
                    <p>From Dylan - 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
