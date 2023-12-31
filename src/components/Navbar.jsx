import React from "react";
import "../styles/Navbar.css";

export const Navbar = () => {

    return(
        <nav className="navbar">

            <div className="left">
                <a href="https://shedrick-williams-sedwilliams.vercel.app/" style={{textDecoration: 'none'}}><h1 className="left-text">Shedrick Williams</h1></a>
            </div>

            <div className="right">
                <a href="https://www.fiverr.com" className="right-logo__link">
                    <img src="imgs/fiverr.png" alt="Fiverr" className="right-logo" id="fiverr"/>
                </a>
                <a href="https://www.x.com" className="right-logo__link">
                    <img src="imgs/twitter.png" alt="X.com" className="right-logo" id="twitter"/>
                </a>
                <a href="https://www.youtube.com" className="right-logo__link">
                    <img src="imgs/youtube.png" alt="YouTube" className="right-logo" id="youtube"/>
                </a>
            </div>
        
        </nav> 
    );
};

