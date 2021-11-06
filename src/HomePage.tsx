import React from 'react';
import './HomePage.css';
import Introduction from './Introduction'
import ContactInformation from './ContactInformation';

function HomePage() {
    return (
        <div className="home-page">
            <Introduction />
            <ContactInformation />
        </div>
    );
}

export default HomePage;
