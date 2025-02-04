'use client';

import '../../../../public/styles/portfolio.css';
import Navbar, { ContentProps } from '@/app/components/portfolio/navbar';
import Header, { UserProps } from '@/app/components/portfolio/header';
import About from '@/app/components/portfolio/about';
import Service, { ServiceProps } from '@/app/components/portfolio/service';
import TechStack, { TechStackProps } from '@/app/components/portfolio/tech-stack';
import Projects, { ProjectProps } from '@/app/components/portfolio/projects';
import ContactMe from '@/app/components/portfolio/contact';
import Footer from '@/app/components/portfolio/footer';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function getUser(setUser: Dispatch<SetStateAction<UserProps>>, setUserUpdateStatus: Dispatch<SetStateAction<boolean>>) {
    const user = {
        name: 'Robanu Dakhayin',
        job: 'SOFTWARE ENGINEER',
    };

    setUser(user);
    setUserUpdateStatus(false);
}

function getNavbarContents(setNavbarContents: Dispatch<SetStateAction<ContentProps[]>>, setNavbarContentsUpdateStatus: Dispatch<SetStateAction<boolean>>) {
    const nav_contents = [
        { id: 'about-nav', title: 'About', link: '#about' },
        { id: 'services-nav', title: 'Services', link: '#services' },
        { id: 'tech-stacks-nav', title: 'Tech Stacks', link: '#tech-stacks' },
        { id: 'projects-nav', title: 'Projects', link: '#projects' },
        { id: 'contact-nav', title: 'Contact Me', link: '#contact' },
    ];

    setNavbarContents(nav_contents);
    setNavbarContentsUpdateStatus(false);
}

function getServices(setServices: Dispatch<SetStateAction<ServiceProps[]>>, setServicesUpdateStatus: Dispatch<SetStateAction<boolean>>) {
    const services = [
        {
            id: 1, title: 'Website Development', list_services: [
                'Frontend & Backend: Responsive design and strong business logic',
                'API Integration: Connecting various services for optimal functionality',
                'Maintenance & Support: Ensuring the performance and security of your application',
            ],
            source: '/icons/Website.png',
        },
        {
            id: 2, title: 'Mobile Development',
            list_services: [
                'Attractive and intuitive UI/UX design',
                'API integration for better functionality',
                'Ongoing maintenance and support for optimal performance',
            ],
            source: '/icons/Mobile.png',
        },
    ];

    setServices(services);
    setServicesUpdateStatus(false);
}

function getTechStacks(setTechStacks: Dispatch<SetStateAction<TechStackProps[]>>, setTechStacksUpdateStatus: Dispatch<SetStateAction<boolean>>) {
    const tech_stacks = [
        { id: 2, title: 'Laravel', icon_source: '/icons/Laravel.png' },
        { id: 3, title: 'CodeIgniter', icon_source: '/icons/Codeigniter.png' },
        { id: 4, title: 'Flutter', icon_source: '/icons/Flutter.png' },
        { id: 1, title: 'React JS', icon_source: '/icons/React.png' },
        { id: 5, title: 'MySql', icon_source: '/icons/MySql.png' },
        { id: 6, title: 'PHP', icon_source: '/icons/PHP.png' },
        { id: 7, title: 'Dart', icon_source: '/icons/Dart.png' },
        { id: 8, title: 'Javascript', icon_source: '/icons/Javascript.png' },
        { id: 9, title: 'Typescript', icon_source: '/icons/Typescript.png' },
        { id: 10, title: 'CSS', icon_source: '/icons/CSS.png' },
        { id: 11, title: 'HTML', icon_source: '/icons/HTML.png' },
        { id: 12, title: 'Git', icon_source: '/icons/GIT.png' },
        { id: 13, title: 'Tortoise SVN', icon_source: '/icons/SVN.png' },
    ];

    setTechStacks(tech_stacks);
    setTechStacksUpdateStatus(false);
}

function getProjects(setprojects: Dispatch<SetStateAction<ProjectProps[]>>, setProjectsUpdateStatus: Dispatch<SetStateAction<boolean>>) {
    const projects = [
        {
            id: 1,
            project_category: 'Web Development',
            title: 'JIMMONSHOP',
            description: `
            A website that functions to assist the online sales 
            process for BUMJ in the JIMM FST Universitas Airlangga organization. Includes managing product data to be sold such as adding 
            new products, updating products, checking sales data for each product, managing orders; and purchasing products.
            `,
            framework: 'Laravel 10',
            jobdesc: 'FullStack',
            list_jobdescs: [
                'Design Database',
                'Frontend Programming',
                'Backend Programming',
            ],
            documentation: [
                {
                    id: 1,
                    description: 'Lorem ipsum',
                    image_source: '/projects/jimmonshop/Login Page.png',
                },
                {
                    id: 2,
                    description: 'Lorem ipsum 2',
                    image_source: '/projects/jimmonshop/About Us Page.png',
                },
            ]
        },
    ];

    setprojects(projects);
    setProjectsUpdateStatus(false);
}

export default function Portfolio() {
    const default_user: UserProps = { name: '', job: '' };

    const [user, setUser] = useState(default_user);
    const [contents, setNavbarContents] = useState<ContentProps[]>([]);
    const [services, setServices] = useState<ServiceProps[]>([]);
    const [tech_stacks, setTechStacks] = useState<TechStackProps[]>([]);
    const [projects, setprojects] = useState<ProjectProps[]>([]);
    const [is_user_update, setUserUpdateStatus] = useState(true);
    const [is_contents_update, setContentsUpdateStatus] = useState(true);
    const [is_services_update, setServicesUpdateStatus] = useState(true);
    const [is_techStacks_update, setTechStacksUpdateStatus] = useState(true);
    const [is_projects_update, setProjectsUpdateStatus] = useState(true);

    useEffect(() => {
        if (is_user_update) {
            getUser(setUser, setUserUpdateStatus);
        }
    }, [user, is_user_update]);

    useEffect(() => {
        if (is_contents_update) {
            getNavbarContents(setNavbarContents, setContentsUpdateStatus);
        }
    }, [contents, is_contents_update]);

    useEffect(() => {
        if (is_services_update) {
            getServices(setServices, setServicesUpdateStatus);
        }
    }, [services, is_services_update]);

    useEffect(() => {
        if (is_techStacks_update) {
            getTechStacks(setTechStacks, setTechStacksUpdateStatus);
        }
    }, [tech_stacks, is_techStacks_update]);

    useEffect(() => {
        if (is_projects_update) {
            getProjects(setprojects, setProjectsUpdateStatus);
        }
    }, [projects, is_projects_update]);

    return (
        <>
            {/* <!-- Page Navbar --> */}
            <Navbar contents={contents} />
            {/** <!-- End of Page Navbar --> */}

            {/* <!-- page header --> */}
            <Header user={user} />
            {/* <!-- end of page header --> */}

            {/* <!-- about section --> */}
            <About image_source='/images/robanu buat cv ats.png' cv='/documents/Robanu Dakhayin-resume.pdf'>
                <p className='text-start font-normal text-sm xl:text-base 2xl:text-lg'>Hello! I am Robanu Dakhayin, a Fresh Graduate of Information System who has an interest in data analysis that can be used in collecting information to make a decision. In addition, I am interested in developing mobile and website-based applications that have benefits for stakeholders and the general public.</p>
            </About>
            {/** <!-- end of about section --> */}

            {/* <!-- services section --> */}
            <Service services={services} />
            {/* </section><!-- end of services section --> */}

            {/* <!-- tools section --> */}
            <TechStack tech_stacks={tech_stacks} />
            {/* </section><!-- end of tools section --> */}

            {/* <!-- projects section --> */}
            <Projects projects={projects} />
            {/** <!-- end of projects section --> */}

            {/* <!-- contact section --> */}
            <ContactMe />
            {/** <!-- end of contact section --> */}

            {/* <!-- footer --> */}
            <Footer />
            {/** <!-- end of page footer --> */}
        </>
    );
}