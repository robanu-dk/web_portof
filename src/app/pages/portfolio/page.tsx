'use client';

import '../../../../public/styles/portfolio.css';
import Navbar, { ContentProps } from '@/app/components/portfolio/navbar';
import Header, { UserProps } from '@/app/components/portfolio/header';
import About from '@/app/components/portfolio/about';
import Service, { ServiceProps } from '@/app/components/portfolio/service';
import TechStack, { TechStackProps } from '@/app/components/portfolio/tech-stack';
import Projects, { ProjectProps } from '@/app/components/portfolio/projects';
import ContactMe, { ContactProps } from '@/app/components/portfolio/contact';
import Footer from '@/app/components/portfolio/footer';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function getPortFolio(setUser: Dispatch<SetStateAction<UserProps>>, setContact: Dispatch<SetStateAction<ContactProps>>, setPortfolioUpdateStatus: Dispatch<SetStateAction<boolean>>) {
    const user = {
        name: 'Robanu Dakhayin',
        job: 'SOFTWARE ENGINEER',
    };

    const contact = {
        whatsapp_no: '6288228400856',
    }

    setPortfolioUpdateStatus(false);
    setUser(user);
    setContact(contact);
}

function getNavbarContents(setNavbarContents: Dispatch<SetStateAction<ContentProps[]>>, setNavbarContentsUpdateStatus: Dispatch<SetStateAction<boolean>>) {
    // reset data
    setNavbarContents([]);
    
    // get data and set data
    const nav_contents = [
        { id: 'about-nav', title: 'About', link: '#about' },
        { id: 'services-nav', title: 'Services', link: '#services' },
        { id: 'tech-stacks-nav', title: 'Tech Stacks', link: '#tech-stacks' },
        { id: 'projects-nav', title: 'Projects', link: '#projects' },
        { id: 'contact-nav', title: 'Contact Me', link: '#contact' },
    ];

    setNavbarContentsUpdateStatus(false);
    setNavbarContents(nav_contents);
}

function getServices(setServices: Dispatch<SetStateAction<ServiceProps[]>>, setServicesUpdateStatus: Dispatch<SetStateAction<boolean>>) {
    // reset data
    setServices([]);
    
    // get data and set data
    const services = [
        {
            id: 1,
            title: 'Website Development',
            list_services: [
                'Frontend & Backend: Responsive design and strong business logic',
                'API Integration: Connecting various services for optimal functionality',
                'Maintenance & Support: Ensuring the performance and security of your application',
            ],
            source: '/icons/Website.png',
        },
        {
            id: 2,
            title: 'Mobile Development',
            list_services: [
                'Attractive and intuitive UI/UX design',
                'API integration for better functionality',
                'Ongoing maintenance and support for optimal performance',
            ],
            source: '/icons/Mobile.png',
        },
    ];

    setServicesUpdateStatus(false);
    setServices(services);
}

function getTechStacks(setTechStacks: Dispatch<SetStateAction<TechStackProps[]>>, setTechStacksUpdateStatus: Dispatch<SetStateAction<boolean>>) {
    // reset data
    setTechStacks([]);

    // get data and set data
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

    setTechStacksUpdateStatus(false);
    setTechStacks(tech_stacks);
}

function getProjects(setprojects: Dispatch<SetStateAction<ProjectProps[]>>, setProjectsUpdateStatus: Dispatch<SetStateAction<boolean>>) {
    // reset data
    setprojects([]);
    
    // get data and set data
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
            tech_stacks: [
                'Laravel Framework version 10 (an upgrade from Laravel version 9)',
                'MySQL Database',
                'Github for version control',
            ],
            jobdesc: 'FullStack Programmer',
            list_jobdescs: [
                'Design Database',
                'Frontend Programming',
                'Backend Programming',
            ],
            documentation: [
                {
                    id: 1,
                    description: `Lorem ipsum`,
                    image_source: '/projects/jimmonshop/Login Page.png',
                },
                {
                    id: 2,
                    description: `Lorem ipsum`,
                    image_source: '/projects/jimmonshop/Register Account Page.png',
                },
                {
                    id: 3,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Landing Page.png',
                },
                {
                    id: 4,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Products Page (without login).png',
                },
                {
                    id: 5,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Detail product category (without login).png',
                },
                {
                    id: 6,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Detail purchase page (without login).png',
                },
                {
                    id: 7,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Detail Purchase Page.png',
                },
                {
                    id: 8,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Invoice Page.png',
                },
                {
                    id: 9,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Event Page (without login).png',
                },
                {
                    id: 10,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Detail Event (without login).png',
                },
                {
                    id: 11,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Form Registrasi Event Page.png',
                },
                {
                    id: 12,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/About Us Page.png',
                },
                {
                    id: 13,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Detail About Us Page.png',
                },
                {
                    id: 14,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Profile Admin.png',
                },
                {
                    id: 15,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin List Product Category.png',
                },
                {
                    id: 16,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin Detail Product Category.png',
                },
                {
                    id: 17,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin Create New Category.png',
                },
                {
                    id: 18,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin Update Product Category.png',
                },
                {
                    id: 19,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin List Products.png',
                },
                {
                    id: 20,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin Detail Product.png',
                },
                {
                    id: 21,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin Create New Product.png',
                },
                {
                    id: 22,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin Update Product.png',
                },
                {
                    id: 23,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin List Orders.png',
                },
                {
                    id: 24,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin List Orders each Product.png',
                },
                {
                    id: 25,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin List Order Status your order is on the way.png',
                },
                {
                    id: 26,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin List Order Status Waiting Payment.png',
                },
                {
                    id: 27,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin List Order Status Seller is preparing your order.png',
                },
                {
                    id: 28,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin List Order Status Completed.png',
                },
                {
                    id: 29,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin List Events.png',
                },
                {
                    id: 30,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin Detail Events.png',
                },
                {
                    id: 31,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin List Event Participants.png',
                },
                {
                    id: 32,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin Create New Events.png',
                },
                {
                    id: 33,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Admin Update Events.png',
                },
                {
                    id: 34,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard Profile user.png',
                },
                {
                    id: 35,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard User Register Event.png',
                },
                {
                    id: 36,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard User Detail Register Event.png',
                },
                {
                    id: 37,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard User Purchase Table.png',
                },
                {
                    id: 38,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard User Invoice.png',
                },
                {
                    id: 39,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Dashboard User Purchase Table Can Complete Purchase.jpg',
                },
            ]
        },
        {
            id: 2,
            project_category: 'OBE',
            title: 'JANGAN LUPA DUSK BDD TEST NYA',
            description: `
            A website that functions to assist the online sales 
            process for BUMJ in the JIMM FST Universitas Airlangga organization. Includes managing product data to be sold such as adding 
            new products, updating products, checking sales data for each product, managing orders; and purchasing products.
            `,
            tech_stacks: [
                'Laravel Framework version 10 (an upgrade from Laravel version 9)',
                'MySQL Database',
                'Github for version control',
            ],
            jobdesc: 'FullStack',
            list_jobdescs: [
                'Design Database',
                'Frontend Programming',
                'Backend Programming',
            ],
            documentation: [
                {
                    id: 1,
                    description: `Lorem ipsum`,
                    image_source: '/projects/jimmonshop/Login Page.png',
                },
                {
                    id: 2,
                    description: `Lorem ipsum`,
                    image_source: '/projects/jimmonshop/Register Account Page.png',
                },
                {
                    id: 3,
                    description: `Lorem ipsum 2`,
                    image_source: '/projects/jimmonshop/Landing Page.png',
                },
            ]
        },
    ];

    setProjectsUpdateStatus(false);
    setprojects(projects);
}

export default function Portfolio() {
    const default_user: UserProps = { name: '', job: '' };
    const default_contact: ContactProps = {whatsapp_no: ''};

    const [user, setUser] = useState<UserProps>(default_user);
    const [contact, setContact] = useState<ContactProps>(default_contact);
    const [contents, setNavbarContents] = useState<ContentProps[]>([]);
    const [services, setServices] = useState<ServiceProps[]>([]);
    const [tech_stacks, setTechStacks] = useState<TechStackProps[]>([]);
    const [projects, setprojects] = useState<ProjectProps[]>([]);
    const [is_portfolio_update, setPortfolioUpdateStatus] = useState(true);
    const [is_contents_update, setContentsUpdateStatus] = useState(true);
    const [is_services_update, setServicesUpdateStatus] = useState(true);
    const [is_techStacks_update, setTechStacksUpdateStatus] = useState(true);
    const [is_projects_update, setProjectsUpdateStatus] = useState(true);

    useEffect(() => {
        if (is_portfolio_update) {
            getPortFolio(setUser, setContact, setPortfolioUpdateStatus);
        }
    }, [is_portfolio_update]);

    useEffect(() => {
        if (is_contents_update) {
            getNavbarContents(setNavbarContents, setContentsUpdateStatus);
        }
    }, [is_contents_update]);

    useEffect(() => {
        if (is_services_update) {
            getServices(setServices, setServicesUpdateStatus);
        }
    }, [is_services_update]);

    useEffect(() => {
        if (is_techStacks_update) {
            getTechStacks(setTechStacks, setTechStacksUpdateStatus);
        }
    }, [is_techStacks_update]);

    useEffect(() => {
        if (is_projects_update) {
            getProjects(setprojects, setProjectsUpdateStatus);
        }
    }, [is_projects_update]);

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
            <button onClick={() => setProjectsUpdateStatus(true)} className='fixed bottom-4 right-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'>Refresh Project</button>

            {/* <!-- contact section --> */}
            <ContactMe whatsapp_no={contact.whatsapp_no}/>
            {/** <!-- end of contact section --> */}

            {/* <!-- footer --> */}
            <Footer />
            {/** <!-- end of page footer --> */}
        </>
    );
}