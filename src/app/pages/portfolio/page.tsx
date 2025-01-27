import '../../../../public/styles/portfolio.css';
import Navbar from '@/app/components/portfolio/navbar';
import Header from '@/app/components/portfolio/header';
import About from '@/app/components/portfolio/about';
import Service from '@/app/components/portfolio/service';
import Projects from '@/app/components/portfolio/projects';
import ContactMe from '@/app/components/portfolio/contact';
import Footer from '@/app/components/portfolio/footer';
import Tools from '@/app/components/portfolio/tool';

export default function Portfolio() {
    const contents = [
        { id: 1, title: 'About', link: '#about' },
        { id: 2, title: 'Services', link: '#services' },
        { id: 3, title: 'Tools', link: '#tools' },
        { id: 4, title: 'Projects', link: '#projects' },
        { id: 5, title: 'Contact Me', link: '#contact' },
    ];

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

    const tools = [
        { id: 1, title: 'web', icon_source: '/images/profil_robanu dakhayin.png' },
        { id: 2, title: 'web', icon_source: '/images/profil_robanu dakhayin.png' },
    ];

    const project_categories = [
        { id: 1, name: 'web' },
        { id: 2, name: 'mobile' },
    ];

    const projects = [
        { id: 1, project_category_id: 1, title: 'project1', description: 'project1', image_sources: ['/images/profil_robanu dakhayin.png'] },
        { id: 2, project_category_id: 1, title: 'project1', description: 'project1', image_sources: ['/images/profil_robanu dakhayin.png'] },
        { id: 3, project_category_id: 1, title: 'project1', description: 'project1', image_sources: ['/images/profil_robanu dakhayin.png'] },
        { id: 4, project_category_id: 1, title: 'project1', description: 'project1', image_sources: ['/images/profil_robanu dakhayin.png'] },
        { id: 5, project_category_id: 2, title: 'project1', description: 'project1', image_sources: ['/images/profil_robanu dakhayin.png'] },
        { id: 6, project_category_id: 2, title: 'project1', description: 'project1', image_sources: ['/images/profil_robanu dakhayin.png'] },
    ];

    return (
        <>
            {/* <!-- Page Navbar --> */}
            <Navbar contents={contents} />
            {/** <!-- End of Page Navbar --> */}

            {/* <!-- page header --> */}
            <Header />
            {/* <!-- end of page header --> */}

            {/* <!-- about section --> */}
            <About image_source='/images/robanu buat cv ats.png' cv='/documents/Robanu Dakhayin-resume.pdf'>
                <p>Hello! I am Robanu Dakhayin, a Fresh Graduate of Information System who has an interest in data analysis that can be used in collecting information to make a decision. In addition, I am interested in developing mobile and website-based applications that have benefits for stakeholders and the general public.</p>
            </About>
            {/** <!-- end of about section --> */}

            {/* <!-- services section --> */}
            <Service services={services} />
            {/* </section><!-- end of services section --> */}

            {/* <!-- tools section --> */}
            <Tools tools={tools} />
            {/* </section><!-- end of tools section --> */}

            {/* <!-- projects section --> */}
            <Projects projects={projects} project_categories={project_categories} />
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