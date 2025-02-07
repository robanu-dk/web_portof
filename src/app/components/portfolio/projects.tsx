import ProjectDocumentationCarousel from "./project_documentation"

interface ProjectProps {
    id: number,
    project_category: string,
    title: string,
    description: string,
    tech_stacks: string | string[],
    jobdesc: string,
    list_jobdescs: string | string[],
    documentation: {
        id: number,
        description: string,
        image_source: string,
    }[],
}

interface ProjectsProps {
    projects: ProjectProps[],
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section className="section" id="projects">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h2 className="section-title mb-6">Projects</h2>
                {/* <!-- row --> */}
                {
                    projects.map((project, key) =>
                        <div key={`project-${key}`} id={`carousel-section-${project.id}`} className='mb-3'>
                            <div className="card card-projects rounded-sm hover:-translate-y-2 hover:shadow-lg">
                                <div className='p-2'>
                                    <h4 className='text-start mb-3 mt-2'>{project.title} ({project.project_category})</h4>
                                    <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>Description:</b> {project.description}</p>
                                    <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>Tech Stacks:</b> {typeof (project.tech_stacks) == 'string' ? project.tech_stacks : null}</p>
                                    {
                                        Array.isArray(project.tech_stacks) ?
                                            <ol className='list-decimal text-sm xl:text-base 2xl:text-lg pl-4 space-y-2'>
                                                {
                                                    project.tech_stacks?.map((tech_stack, index) => <li key={index} className='text-start font-normal'>{tech_stack}</li>)
                                                }
                                            </ol> : null
                                    }
                                    <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>Jobdesc:</b> {project.jobdesc}</p>
                                    <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b className='font-bold'>List Detail Jobdesc:</b> {typeof (project.list_jobdescs) == 'string' ? project.list_jobdescs : null}</p>
                                    {
                                        Array.isArray(project.list_jobdescs) ?
                                            <ol className='list-decimal text-sm xl:text-base 2xl:text-lg pl-4 space-y-2'>
                                                {
                                                    project.list_jobdescs?.map((jobdesc, index) => <li key={index} className='text-start font-normal'>{jobdesc}</li>)
                                                }
                                            </ol> : null
                                    }
                                    <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'><b>Documentation:</b></p>
                                    {
                                        <ProjectDocumentationCarousel project_documentations={project.documentation} project_id={project.id} />
                                    }
                                </div>
                            </div>
                        </div>)
                }
                {/** <!-- end of row --> */}
            </div> {/** <!-- end of container --> */}
        </section>
    );
}

export type { ProjectProps };