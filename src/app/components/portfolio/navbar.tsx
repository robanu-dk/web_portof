'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ScrollToId from "../_custom_hooks/scroll_to_id";

interface PropsNavbar {
    contents: { id: number, title: string, link: string }[],
};

// handle scroll
function AnimateScroll(setScroll: Dispatch<SetStateAction<boolean>>) {
    // handlinig when click navbar item
    ScrollToId();

    useEffect(() => {
        // handling navbar style when scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false)
            }
        });
    });
}

export default function Navbar({ contents }: PropsNavbar) {
    // create hook to identify navbar is active or not
    const [is_active, setActive] = useState(false);

    // create hook to identify navbar is scrolled or not
    const [is_scrolled, setScroll] = useState(false);

    // function to handle hamburger button
    const handleClick = function (e: { preventDefault: () => void; }) {
        e.preventDefault();

        setActive(!is_active);
    };

    // add animate scroll
    AnimateScroll(setScroll);

    return (
        <nav className={`custom-navbar ${is_scrolled ? 'scrolled' : 'unscrolled'} ${is_active ? 'show' : ''}`} data-spy="affix" data-offset-top="20">
            <div className="container">
                <ul className={`nav ${is_active ? 'show' : ''}`}>
                    {
                        contents.map((item: { id: number, title: string, link: string }) => {
                            return (
                                <li key={`${item.id}`} className="item">
                                    <a className="link" href={item.link}>{item.title}</a>
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