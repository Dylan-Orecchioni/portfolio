import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
<<<<<<< HEAD
                    <img src='./media/Profil.jpg' alt='profil-pic'></img>
=======
                    <img src='./media/profil.png' alt='profil-pic'></img>
>>>>>>> 349de0eec83a45337d60da21f37c7d704ecb3817
                    <h3>Dylan Orecchioni</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>   
                        {/* On precise que lorsque une Navlink est sélectionné on active telle Class */}
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
                    <NavLink exact="true" to="/portfolio" className={(nav) => (nav.isActive ? "navActive" : "")}>
                        <i className='fas fa-images'></i>
                        <span>PortFolio</span>
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
                        <a href='https://www.linkedin.com/in/dylan-orecchioni-développeur-web' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/Dylan-Orecchioni' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-github'></i>
                        </a>
                    </li>
<<<<<<< HEAD
                    {/* <li>
                        <a href='https://www.google.com' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-twitter'></i>
=======
                    <li>
                        <a href='#' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-instagram'></i>
>>>>>>> 349de0eec83a45337d60da21f37c7d704ecb3817
                        </a>
                    </li>
                    {/* <li>
                        <a href='https://www.google.com' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-codepen'></i>
                        </a>
                    </li> */}
                </ul>
                <div className='signature'>
                    <p>From Dylan - 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
