import React from 'react';
import './HomePage.css';
import Introduction from './Introduction'
import ContactInformation from './ContactInformation';

function HomePage() {
    return (
        <div className="home-page">
            <div className="home-page-content">
                <Introduction />
                <ContactInformation />
            </div>
        </div>
    );
}

export default HomePage;
