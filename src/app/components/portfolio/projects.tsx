import Image from 'next/image';

interface PropsProjects {
    project_categories: {
        id: number,
        name: string,
    }[],
    projects: {
        id: number,
        project_category_id: number,
        title: string,
        description: string,
        image_sources: string[],
    }[],
}

function ProjectsSection(project: {
    id: number,
    project_category_id: number,
    title: string,
    description: string,
    image_sources: string[],
}, project_category_name: string, key: number | string) {
    return (
        <div key={`project-${key}`} className="col-md-4">
            <a href="#" className="portfolio-card">
                <Image src={project.image_sources[0]} width={60} height={60} alt={project.title} />
                <span className="portfolio-card-overlay">
                    <span className="portfolio-card-caption">
                        <h4>{project.title}</h4>
                        <p className="font-weight-normal">Category: {project_category_name}</p>
                    </span>
                </span>
            </a>
        </div>
    );
}

function ProjectsCategorySection(project_category: {
    id: number,
    name: string,
}, projects: PropsProjects['projects'], key: number | string) {
    return (
        <div key={`project-category-${key}`} className="row">
            <div className="col-md-4">
                <a href="#" className="portfolio-card">
                    <Image src='/images/profil_robanu dakhayin.png' width={60} height={60} alt={project_category.name} />
                    <span className="portfolio-card-overlay">
                        <span className="portfolio-card-caption">
                            <h4>Web Designing</h4>
                            <p className="font-weight-normal">Category: Web Templates</p>
                        </span>
                    </span>
                </a>
            </div>
            {
                projects.filter((project) => {
                    return project.project_category_id === project_category.id;
                }).map((project, index) => {
                    return ProjectsSection(project, project_category.name, index);
                })
            }
        </div>
    );
}

export default function Projects({ project_categories, projects }: PropsProjects) {
    return (
        <section className="section" id="projects">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Portfolio</h6>
                {/* <!-- row --> */}
                {
                    project_categories.map((project_category, index) => {
                        return ProjectsCategorySection(project_category, projects, index);
                    })
                }
                {/** <!-- end of row --> */}
            </div> {/** <!-- end of container --> */}
        </section>
    );
}