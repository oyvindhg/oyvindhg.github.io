import { useState } from 'react';
import './Credits.css';

function Credits() {

    const [showCredits, setShowCredits] = useState(false)

    const toggleShowCredits = () => {
        setShowCredits(!showCredits)
    }

    return (
        <div className="credits" onClick={toggleShowCredits}>
            <span className="credit-opener">credit
                {showCredits &&
                    <span> &#8643;</span>
                }
                {!showCredits &&
                    <span> &#8637;</span>
                }
            </span>
            {showCredits &&
                <div>
                    Written with <a href="https://reactjs.org/" target="_blank">React</a> |
                    SVGs from <a href="https://tablericons.com/" target="_blank">Tabler Icons</a> |
                    Logo and favicon from <a href="https://favicon.io/" target="_blank">favicon.io</a>
                </div>
            }
        </div>
    );
}

export default Credits;