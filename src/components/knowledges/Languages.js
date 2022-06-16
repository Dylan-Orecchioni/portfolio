import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state= {
        languages: [
            {id:1, value: "Css", xp:0.9},
            {id:2, value: "Javascript", xp:0.6},
            {id:3, value: "Php", xp:0.5},
            {id:4, value: "SQL", xp:0.75}
        ],
        frameworks: [
            {id:1, value: "ReactJS/Native", xp:0.5},
            {id:1, value: "Symfony", xp:0.5},
            {id:2, value: "Bootstrap", xp:0.9},
            {id:3, value: "Sass", xp:0.65},
            {id:4, value: "Wordpress", xp:0.75}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className='languagesFrameworks'>
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                <ProgressBar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Framework & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;