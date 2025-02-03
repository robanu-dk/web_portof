'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PropsProjects {
    projects: {
        id: number,
        project_category: string,
        title: string,
        description: string,
        framework: string | null,
        jobdesc: string | null,
        list_jobdescs: string[] | null,
        documentation: {
            id: number,
            description: string,
            image_source: string,
        }[],
    }[],
}

function ProjectDocumentationCarousel(project_documentations: { id: number, description: string, image_source: string }[]) {
    const [show, setShow] = useState(0);

    const nextSlide = () => {
        setShow(show == (project_documentations.length - 1) ? 0 : show + 1);
    }

    const previousSlide = () => {
        setShow(show == 0 ? (project_documentations.length - 1) : show - 1);
    }

    const handleIndicatorClick = (index: number) => {
        setShow(index);
    }

    return (
        <div id="default-carousel" className="relative w-full">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-full overflow-hidden rounded-lg">
                {
                    project_documentations.map((item, index) =>
                        <div key={index} className={`${show == index ? 'transition-opacity duration-700 ease-in-out opacity-100' : 'opacity-0'}`}>
                            <p className={`${show != index ? 'hidden' : ''} text-start font-normal text-sm xl:text-base 2xl:text-lg`}>{item.description}</p>
                            <Image className={`${show != index ? 'hidden' : ''} relative block w-full rounded-sm`} src={item.image_source} height={4000} width={4000} alt={item.image_source.split('/').reverse()[0]} priority={false} />
                        </div>
                    )
                }
                {/* <!-- Slider controls --> */}
                {
                    project_documentations.length > 1 ? <>
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={previousSlide}>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </> : null
                }
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {
                        project_documentations.length > 1 ? project_documentations.map((item, index) => <button key={index} type="button" className={`w-3 h-3 rounded-full ${index == show ? 'bg-white' : 'bg-gray-400'}`} aria-current="true" aria-label={`Slide ${index + 1}`} onClick={() => handleIndicatorClick(index)}></button>) : null
                    }
                </div>
            </div>
        </div>
    );
}

export default function Projects({ projects }: PropsProjects) {
    return (
        <section className="section" id="projects">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h2 className="section-title mb-6">Projects</h2>
                {/* <!-- row --> */}
                {
                    projects.map((project, key) => <div key={`project-${key}`}>
                        <div className="card card-projects rounded-sm hover:-translate-y-2 hover:shadow-lg">
                            <div className='p-2'>
                                <h4 className='text-start mb-3 mt-2'>{project.title} ({project.project_category})</h4>
                                <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>Description:</b> {project.description}</p>
                                <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>Framework:</b> {project.framework}</p>
                                <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>Jobdesc:</b> {project.jobdesc}</p>
                                <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>List Detail Jobdesc:</b></p>
                                <ol className='list-decimal text-sm xl:text-base 2xl:text-lg pl-4 space-y-2'>
                                    {
                                        project.list_jobdescs?.map((jobdesc, index) => <li key={index} className='text-start font-normal'>{jobdesc}</li>)
                                    }
                                </ol>
                                <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b>Documentation:</b></p>
                                <div id='carousel-section'>
                                    {
                                        ProjectDocumentationCarousel(project.documentation)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>)
                }
                {/** <!-- end of row --> */}
            </div> {/** <!-- end of container --> */}
        </section>
    );
}