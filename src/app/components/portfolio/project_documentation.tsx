'use client'

import Image from 'next/image';
import { MouseEvent, useRef, useState } from 'react';

interface ProjectDocumentationProps {
    project_documentations: {
        id: number,
        description: string,
        image_source: string,
    }[],
}

export default function ProjectDocumentationCarousel({ project_documentations }: ProjectDocumentationProps) {
    const [show, setShow] = useState<number>(0);
    const [navigate_slide_show, setNavigateSlideShow] = useState<boolean>(false);
    const [refresh_slide, setRefreshSlide] = useState<boolean>(true);
    const [count_project_document_old, setCountProjectDocOld] = useState<number>(project_documentations.length);

    const navigate_slide_input = useRef<HTMLInputElement>(null);

    // detect if there are changes to project documentation
    if (count_project_document_old != project_documentations.length) {
        setCountProjectDocOld(project_documentations.length);
        setShow(0);
    }

    const refreshSlide = () => {
        setRefreshSlide(false);
        setTimeout(() => {
            setRefreshSlide(true);
        }, 10);
    }

    const nextSlide = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        setShow(show == (project_documentations.length - 1) ? 0 : show + 1);

        setNavigateSlideShow(false);
        refreshSlide();
    }

    const previousSlide = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        setShow(show == 0 ? (project_documentations.length - 1) : show - 1);

        setNavigateSlideShow(false);
        refreshSlide();
    }

    const navigateSlide = () => {
        const slide = navigate_slide_input.current ? navigate_slide_input.current.value : '';

        if (slide != '') {
            const slide_number = parseInt(slide);
            if (slide_number <= 0) {
                setShow(0);
            } else if (slide_number > project_documentations.length) {
                setShow(project_documentations.length - 1);
            } else {
                setShow(slide_number - 1);
            }
        }

        if (navigate_slide_input.current) {
            navigate_slide_input.current.value = '';
        }

        setNavigateSlideShow(false);
        refreshSlide();
    }

    const handleNavigateInput = () => {
        const input_ref = navigate_slide_input.current;
        if (input_ref) {
            if (input_ref.value != '') {
                const value_rule = input_ref.value.replace(/[^0-9]/g, '');
                if (value_rule != '') {
                    const value = parseInt(value_rule);

                    input_ref.value = Math.max(1, Math.min(value, project_documentations.length)).toString();
                } else {
                    input_ref.value = '';
                }
            }
        }
    }

    const showNavigate = () => {
        setNavigateSlideShow(true);
    }

    return (
        <div id="default-carousel" className="relative w-full">
            {/* <!-- Carousel wrapper --> */}
            <div className={`${refresh_slide ? 'transition-opacity duration-500 ease-in-out opacity-100' : 'opacity-0'}`}>
                <p className={`text-start font-normal text-sm lg:text-base`}>{project_documentations[show].description}</p>
            </div>
            <div className="relative h-full overflow-hidden rounded-lg">
                <div className={`${refresh_slide ? 'transition-opacity duration-500 ease-in-out opacity-100' : 'opacity-0'}`}>
                    <Image className={`relative block w-full rounded-sm`} src={project_documentations[show].image_source} height={4000} width={4000} alt={project_documentations[show].image_source.split('/').reverse()[0]} priority={false} />
                </div>
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
                <div className={`absolute z-40 bottom-2 left-1/2 -translate-x-1/2 ${navigate_slide_show ? 'hidden' : 'animate-grow'}`}>
                    <button className='bg-black bg-opacity-50 p-1 mb-2 text-white text-xs md:text-sm rounded' onClick={showNavigate}>Slide {show + 1} of {project_documentations.length}</button>
                </div>
                <div className={`absolute z-30 bottom-3 left-1/2 -translate-x-1/2 ${navigate_slide_show ? 'animate-grow' : 'hidden'}`}>
                    <div className='card rounded-sm shadow-lg'>
                        <h6 className='text-sm mt-1'>Navigate to Slide</h6>
                        <div className='flex flex-col md:flex-row gap-2 align-items-center justify-content-center mb-2'>
                            <label className='text-sm text-start'>Slide Number:</label>
                            <input ref={navigate_slide_input} placeholder={`${show + 1}`} className='border rounded p-1 w-2/3 md:w-1/3 text-sm' type="text" onChange={handleNavigateInput} />
                        </div>
                        <div className='mb-1'>
                            <button className='bg-purple-600 text-white rounded py-1 px-2 hover:bg-purple-700' onClick={navigateSlide}>Go</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}