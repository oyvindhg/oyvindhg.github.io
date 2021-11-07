import React from 'react';
import './Introduction.css';

function Introduction() {
    return (
        <div className="introduction">
            <TextEntry size="small">hi, my name is</TextEntry>
            <TextEntry size="large">Øyvind Harding Gulbrandsen</TextEntry>
            <div className="space"></div>
            <TextEntry size="small">I'm a</TextEntry>
            <TextEntry size="large">software engineer</TextEntry>
        </div>
    );
}

type TextEntryProps = {
    size: "small" | "large";
    children: React.ReactNode;
}

function TextEntry(props: TextEntryProps) {
    return (
        <div>
            {props.size === "small" &&
                <span className="text-small">
                    {props.children}
                </span>
            }
            {props.size === "large" &&
                <span className="text-large">
                    {props.children}
                </span>
            }
        </div>
    )
}

export default Introduction;
