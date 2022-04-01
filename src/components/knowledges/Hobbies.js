import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span>Jogging</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-futbol'></i>
                    <span>Football</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-music'></i>
                    <span>Musique</span>
                </li>
                <li className='hobby'>
                    <i class="fas fa-film"></i>
                    <span>Cinéma</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-rocket'></i>
                    <span>Espace</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;