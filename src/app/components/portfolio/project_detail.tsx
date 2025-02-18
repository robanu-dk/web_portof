import ProjectDocumentationCarousel from "./project_documentation";
import { IoCloseSharp } from "react-icons/io5";

interface ProjectProps {
    id: number,
    project_category: string,
    title: string,
    description: string,
    tech_stacks: string | string[],
    jobdesc: string,
    list_jobdescs: string | string[],
    documentations: {
        id: number,
        description: string,
        image_source: string,
    }[],
}

interface ProjectPrivateProps {
    project: ProjectProps,
    show: boolean,
    closeProjectDetail: () => void,
}

export default function ProjectDetail({ project, show, closeProjectDetail }: ProjectPrivateProps) {
    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${show ? 'bg-black bg-opacity-50' : 'modal-hide'}`}>
            <div className={`${show ? 'modal-show' : ''} bg-white rounded-lg shadow-lg max-w-xs w-full overflow-hidden md:max-w-2xl`}>
                <div className="p-6 max-h-modal overflow-y-auto">
                    {
                        show ?
                            <div className="fixed top-6 right-5 bg-red-500 flex flex-row gap-2 align-items-center justify-center rounded-full text-white z-50 opacity-75 hover:opacity-100">
                                <button className="flex flex-row align-items-center text-xl font-normal overflow-hidden close-modal-button p-2" onClick={closeProjectDetail}><IoCloseSharp width={4000} height={4000} /><div className="font-normal close-modal-label font-close"><b>Close</b></div></button>
                            </div>
                            : null
                    }
                    <h4 className='text-start px-2 mb-3 mt-2'>
                        <div className="font-modal-title-card">{project.title}</div>
                        <div className="font-modal-label-card">category: {project.project_category}</div>
                    </h4>
                    <div className='p-2'>
                        <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>Description:</b> {project.description}</p>
                        {
                            project.tech_stacks.length > 0 ?
                                <>
                                    <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>Tech Stacks:</b> {typeof (project.tech_stacks) == 'string' ? project.tech_stacks : null}</p>
                                    {
                                        Array.isArray(project.tech_stacks) ?
                                            <ol className='list-decimal text-sm xl:text-base 2xl:text-lg pl-4 space-y-2'>
                                                {
                                                    project.tech_stacks?.map((tech_stack, index) => <li key={index} className='text-start font-normal'>{tech_stack}</li>)
                                                }
                                            </ol>
                                            : null
                                    }
                                </>
                                : null
                        }
                        <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>Jobdesc:</b> {project.jobdesc}</p>
                        {
                            project.list_jobdescs.length > 0 ?
                                <>
                                    <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>List Detail Jobdesc:</b> {typeof (project.list_jobdescs) == 'string' ? project.list_jobdescs : null}</p>
                                    {
                                        Array.isArray(project.list_jobdescs) ?
                                            <ol className='list-decimal text-sm xl:text-base 2xl:text-lg pl-4 space-y-2'>
                                                {
                                                    project.list_jobdescs?.map((jobdesc, index) => <li key={index} className='text-start font-normal'>{jobdesc}</li>)
                                                }
                                            </ol>
                                            : null
                                    }
                                </>
                                : null
                        }
                        {
                            project.documentations.length > 0 ?
                                <>
                                    <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b>Documentation:</b></p>
                                    <ProjectDocumentationCarousel project_documentations={project.documentations} />
                                </>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export type { ProjectProps };