'use client'

import ScrollToId from "../_custom_hooks/scroll_to_id";

interface UserProps {
    name: string,
    job: string,
}

interface HeaderProps {
    user: UserProps,
}

export default function Header({ user }: HeaderProps) {
    // handling navigate scroll
    ScrollToId('about-header');

    return (
        <header id="home" className="header">
            <div className="overlay"></div>
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">I am {user.name}</span>
                </h1>
                <p className="header-subtitle">{user.job.toUpperCase()}</p>

                <a id="about-header" href="#about" className="btn btn-primary">Visit My Profile</a>
            </div>
        </header>
    );
}

export type { UserProps };