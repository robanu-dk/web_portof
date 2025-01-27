import { useEffect } from "react";

export default function ScrollToId() {
    useEffect(() => {
        const all_a_href = Array.from(document.querySelectorAll(`a[href^="#"]`));
        
        all_a_href.map((a_href) => {
            a_href?.addEventListener('click', function (e) {
                e.preventDefault();
                
                const link = a_href as HTMLAnchorElement;
                const id_target = link.hash.replace('#', '');
                const target = document.getElementById(id_target);
    
                window.scrollTo({
                    top: target?.offsetTop,
                    behavior: 'smooth',
                });
            });
        });
    });
}