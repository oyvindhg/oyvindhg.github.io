import React from 'react';
import './HomePage.css';
import Presentation from './Presentation'

function HomePage() {
    return (
        <div className="HomePage">
            <Presentation />
            <a className="LinkedIn-link" href="https://www.linkedin.com/in/oyvindhg/" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
            <a className="GitHub-link" href="https://github.com/oyvindhg" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
        </div>
    );
}

export default HomePage;
