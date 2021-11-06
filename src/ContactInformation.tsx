import React from 'react';
import linkedinLogo from './icons/linkedin.svg';
import githubLogo from './icons/github.svg';
import './ContactInformation.css';

function ContactInformation() {
    return (
        <div className="contact-information">
            <ContactItem logo={linkedinLogo} text="oyvindhg" link="https://www.linkedin.com/in/oyvindhg/" />
            <ContactItem logo={githubLogo} text="oyvindhg" link="https://www.github.com/oyvindhg/" />
        </div>
    );
}

type ContactItemProps = {
    logo: string;
    text: string;
    link: string;
}

function ContactItem(props: ContactItemProps) {

    const handleOnClick = () => window.open(props.link, "_blank")

    return (
        <div className="contact-item" onClick={handleOnClick}>
            <img src={props.logo} alt="linkedin logo" width="30" height="30" />
            {props.text}
        </div>
    )
}

export default ContactInformation;
