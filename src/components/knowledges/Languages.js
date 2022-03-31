import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state= {
        languages: [
            {id:1, value: "Css", xp:1},
            {id:2, value: "Javascript", xp:1},
            {id:3, value: "Php", xp:1}
        ],
        frameworks: [
            {id:1, value: "React", xp:1},
            {id:2, value: "Bootstrap", xp:1},
            {id:3, value: "Sass", xp:1},
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