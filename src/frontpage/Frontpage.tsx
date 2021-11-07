import './Frontpage.css';
import Introduction from './Introduction'
import ContactInformation from './ContactInformation';
import Credits from './Credits';

function Frontpage() {
    return (
        <div className="frontpage">
            <div className="frontpage-contents">
                <Introduction />
                <div className="bottom">
                    <ContactInformation />
                    <div></div>
                </div>
                <Credits />
            </div>
        </div>
    );
}

export default Frontpage;
