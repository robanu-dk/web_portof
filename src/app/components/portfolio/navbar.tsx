'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ScrollToId from "../_custom_hooks/scroll_to_id";

interface PropsNavbar {
    contents: { id: string, title: string, link: string }[],
};

// handle scroll
function AnimateScroll(setScroll: Dispatch<SetStateAction<boolean>>) {
    useEffect(() => {
        // handle scroll
        const handleScroll = () => {
            setScroll(window.scrollY > 0);
        }

        // handling navbar style when scroll
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });
}

export default function Navbar({ contents }: PropsNavbar) {
    // create hook to identify navbar is active or not
    const [is_active, setActive] = useState(false);

    // create hook to identify navbar is scrolled or not
    const [is_scrolled, setScroll] = useState(false);

    // function to handle hamburger button
    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setActive(!is_active);
    };

    // add animate scroll
    AnimateScroll(setScroll);

    // handlinig when click navbar item
    const nav_id = contents.map((content) => content.id);
    ScrollToId(nav_id);

    return (
        <nav className={`custom-navbar ${is_scrolled ? 'scrolled' : 'unscrolled'} ${is_active ? 'show' : ''} ${is_active && is_scrolled ? 'shadow-md' : ''}`} data-spy="affix" data-offset-top="20">
            <div className="container">
                <ul className={`nav ${is_active ? 'show' : ''}`}>
                    {
                        contents.map((item: { id: string, title: string, link: string }) => {
                            return (
                                <li key={item.id} className="item">
                                    <a id={item.id} className="link" href={item.link}>{item.title}</a>
                                </li>
                            );
                        })
                    }
                </ul>
                <a href="#" id="nav-toggle" className={`hamburger hamburger--elastic ${is_active ? 'is-active' : ''}`} onClick={handleClick}>
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </a>
            </div>
        </nav>
    )
}