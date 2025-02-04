import { useEffect } from "react";

function handleEventScroll(e: { preventDefault: () => void; }, a_href_from: HTMLAnchorElement) {
    e.preventDefault();

    const id_target = a_href_from.hash.replace('#', '');
    const target = document.getElementById(id_target);

    window.scrollTo({
        top: target?.offsetTop,
        behavior: 'smooth',
    });
}

function addEventListener(a_href_from: HTMLAnchorElement) {
    const handler = (e: { preventDefault: () => void; }) => handleEventScroll(e, a_href_from);
    a_href_from.addEventListener('click', handler);

    return handler;
}

export default function ScrollToId(from: string[] | string) {
    useEffect(() => {
        const handlers: Array<(e: MouseEvent) => void> = [];
        const all_href_from: HTMLAnchorElement[] = [];

        if (typeof (from) == 'string') {
            const id_from = from.includes('#') ? from.replaceAll('#', '') : from;
            const a_href_from = document.getElementById(id_from) as HTMLAnchorElement;

            const handler = addEventListener(a_href_from);
            handlers.push(handler);
            all_href_from.push(a_href_from);
        } else if (Array.isArray(from)) {
            from.forEach((item) => {
                const id_from = item.includes('#') ? item.replaceAll('#', '') : item;
                const a_href_from = document.getElementById(id_from) as HTMLAnchorElement;

                const handler = addEventListener(a_href_from);
                handlers.push(handler);
                all_href_from.push(a_href_from);
            });
        }

        return () => {
            handlers.forEach((handler, index) => {
                all_href_from[index].removeEventListener('click', handler);
            });
        }
    }, [from]);
}