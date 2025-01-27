'use client'

import ScrollToId from "../_custom_hooks/scroll_to_id";

export default function Header() {
    // handling navigate scroll
    ScrollToId();

    return (
        <header id="home" className="header">
            <div className="overlay"></div>
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">I am Robanu Dakhayin</span>
                </h1>
                <p className="header-subtitle">SOFTWARE ENGINEER</p>

                <a href="#about" className="btn btn-primary">Visit My Profile</a>
            </div>
        </header>
    );
}