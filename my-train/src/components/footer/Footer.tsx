import React from 'react';
import "./footer.css"
import { format } from 'date-fns';

const Footer: React.FC = () => {

    const year = format(new Date(), 'yyyy');
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                </ul>

                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                </ul>

                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                </ul>
            </div>
            <div className="fText">Copyright © {year} MyTrain</div>
        </div>
    )
}

export default Footer;