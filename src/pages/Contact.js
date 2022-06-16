import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contactez-moi !</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Sablonnières 77510</span>
                        </li>
                        <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text='0671754877'>
                                <span 
                                className='clickInput' 
                                onClick={() => {
                                    alert('Numéro de téléphone copié !');
                                }}>
                                    06 71 75 48 77
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className='far fa-envelope'></i>
                            <CopyToClipboard text='dylan77120@live.fr'>
                                <span 
                                className='clickInput' 
                                onClick={() => {
                                    alert('E-mail copié !');
                                }}>
                                    dylan77120@live.fr
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>        
                </div>
                <div className='socialNetwork'>
                    <ul>
                        <a href='https://www.linkedin.com/in/dylan-orecchioni-développeur-web' target="_blank" rel='noopener noreferrer'>
                            <h4>Linkedin</h4>
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href='https://github.com/Dylan-Orecchioni' target="_blank" rel='noopener noreferrer'>
                            <h4>Github</h4>
                            <i className='fab fa-github'></i>
                        </a>
                        {/* <a href='http://www.google.com' target="_blank" rel='noopener noreferrer'>
                            <h4>CodePen</h4>
                            <i className='fab fa-codepen'></i>
                        </a> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;