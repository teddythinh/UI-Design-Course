import React from "react";
import "./mailList.css"
import Button from '@mui/material/Button'

const MailList: React.FC = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">The best saving for your pocket!</h1>
            <span className="mailDescription">Sign up and we will update the best deal for you 💖</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your email address" />
                <Button variant='contained' className='mailButton'>Subscribe</Button>
            </div>
        </div>
    )
}

export default MailList; 