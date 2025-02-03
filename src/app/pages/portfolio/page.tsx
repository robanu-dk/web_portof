import '../../../../public/styles/portfolio.css';
import Navbar from '@/app/components/portfolio/navbar';
import Header from '@/app/components/portfolio/header';
import About from '@/app/components/portfolio/about';
import Service from '@/app/components/portfolio/service';
import Projects from '@/app/components/portfolio/projects';
import ContactMe from '@/app/components/portfolio/contact';
import Footer from '@/app/components/portfolio/footer';
import TechStack from '@/app/components/portfolio/tech-stack';

function getUser() {
    const user = {
        name: 'Robanu Dakhayin',
        job: 'SOFTWARE ENGINEER',
    };

    return user;
}

function getNavbarContents() {
    const nav_contents = [
        { id: 1, title: 'About', link: '#about' },
        { id: 2, title: 'Services', link: '#services' },
        { id: 3, title: 'Tech Stacks', link: '#tech-stacks' },
        { id: 4, title: 'Projects', link: '#projects' },
        { id: 5, title: 'Contact Me', link: '#contact' },
    ];

    return nav_contents
}

function getServices() {
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

    return services;
}

function getTechStacks() {
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

    return tech_stacks;
}

function getProjects() {
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

    return projects;
}

export default function Portfolio() {
    const user = getUser();

    const contents = getNavbarContents();

    const services = getServices();

    const tech_stacks = getTechStacks();

    const projects = getProjects();;

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