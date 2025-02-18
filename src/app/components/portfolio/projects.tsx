'use client';

import { useState } from "react";
import ProjectDetail, { ProjectProps } from "./project_detail";
import { BiDetail } from 'react-icons/bi';

interface ProjectsProps {
    projects: ProjectProps[],
}

export default function Projects({ projects }: ProjectsProps) {
    const [project_show, setProjectShow] = useState<ProjectProps | null>(null);
    const [show_modal, setShowModal] = useState<boolean>(false);

    const closeDetailProject = () => {
        setShowModal(false);
        setTimeout(() => {
            setProjectShow(null);
        }, 250);
    };

    const showDetailProject = (project: ProjectProps) => {
        setProjectShow(project);
        setShowModal(true);
    };

    return (
        <section className="section" id="projects">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h2 className="section-title mb-6">Projects</h2>
                {/* <!-- row --> */}
                <div className="row">
                    {
                        projects.map((project, key) =>
                            <div key={key} className="col-xsm-6 col-sm-4 col-md-3 col-lg-3 mt-4">
                                <div className="card card-main h-full overflow-hidden rounded hover:-translate-y-2 hover:shadow-lg" onClick={() => showDetailProject(project)}>
                                    <div className="card-body p-0 flex flex-column min-h-card">
                                        <h6 className="font-normal text-gray-500 text-start mt-1 px-2 font-label-card">{project.project_category}</h6>
                                        <h5 className="text-start px-2 font-title-card mt-3 mb-4">
                                            {project.title}
                                        </h5>
                                    </div>
                                    <div className="absolute bg-black bg-opacity-50 w-full h-full flex align-items-center justify-content-center click-detail">
                                        <div className="text-xs font-normal bg-white w-3/4 flex flex-row align-items-center justify-content-center gap-1 border-2 border-gray-500 rounded p-1 detail-project-tooltip">
                                            <BiDetail width={400} height={400} />
                                            <div>Click for detail</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/** <!-- end of row --> */}
                {/* modals detail project */}
                {
                    project_show ? <ProjectDetail project={project_show} show={show_modal} closeProjectDetail={closeDetailProject} /> : null
                }
            </div>
            {/** <!-- end of container --> */}
        </section>
    );
}

export type { ProjectProps };
