'use client'

import Image from 'next/image';
import { MouseEvent, useState } from 'react';

interface ProjectDocumentationProps {
    project_documentations: {
        id: number,
        description: string,
        image_source: string,
    }[],
    section_id: string,
}

export default function ProjectDocumentationCarousel({ project_documentations, section_id }: ProjectDocumentationProps) {
    const [show, setShow] = useState<number>(0);
    const [count_project_document_old, setCountProjectDocOld] = useState<number>(project_documentations.length);
    const id_project_section = section_id.replaceAll('#', '');

    // detect if there are changes to project documentation
    if (count_project_document_old != project_documentations.length) {
        setCountProjectDocOld(project_documentations.length);
        setShow(0);
    }

    const scrollTop = () => {
        const target = document.getElementById(id_project_section);
        window.scrollTo({
            top: target ? target.offsetTop * 1.1 : 0,
            behavior: 'smooth',
        });
    }

    const nextSlide = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        setShow(show == (project_documentations.length - 1) ? 0 : show + 1);

        scrollTop();
    }

    const previousSlide = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        setShow(show == 0 ? (project_documentations.length - 1) : show - 1);

        scrollTop();
    }

    const handleIndicatorClick = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, index: number) => {
        e.preventDefault();
        setShow(index);

        scrollTop();
    }

    return (
        <div id="default-carousel" className="relative w-full">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-full overflow-hidden rounded-lg">
                {
                    project_documentations.map((item, index) =>
                        <div key={index} className={`${show == index ? 'transition-opacity duration-500 ease-in-out opacity-100' : 'opacity-0'}`}>
                            <p className={`${show != index ? 'hidden' : ''} text-start font-normal text-sm xl:text-base 2xl:text-lg`}>{item.description}</p>
                            <Image className={`${show != index ? 'hidden' : ''} relative block w-full rounded-sm`} src={item.image_source} height={4000} width={4000} alt={item.image_source.split('/').reverse()[0]} priority={false} />
                        </div>
                    )
                }
                {/* <!-- Slider controls --> */}
                {
                    project_documentations.length > 1 ? <>
                        <a href='#' type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={previousSlide}>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </a>
                        <a href='#' type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </a>
                    </> : null
                }
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {
                        project_documentations.length > 1 ? project_documentations.map((item, index) => <a key={index} type="button" className={`w-3 h-3 rounded-full ${index == show ? 'bg-white' : 'bg-gray-400'}`} aria-current="true" aria-label={`Slide ${index + 1}`} onClick={(e) => handleIndicatorClick(e, index)}></a>) : null
                    }
                </div>
            </div>
        </div>
    );
}