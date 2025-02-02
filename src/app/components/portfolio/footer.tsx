import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; 

export default function Footer() {
    return (
        <div className="container">
            <footer className="footer">
                <p className="mb-0">Copyright Robanu Dakhayin &copy; <a href="#">{(new Date()).getFullYear()}</a></p>
                <div className="row justify-content-end gap-default social-links text-right m-auto ml-sm-auto">
                    <a href="https://github.com/robanu-dk" target='_blank' className="link d-flex justify-content-center align-items-center"><FaGithub className='w-2/3 h-2/3' /></a>
                    <a href="https://www.linkedin.com/in/robanu-dakhayin/" target='_blank' className="link d-flex justify-content-center align-items-center"><FaLinkedin className='w-2/3 h-2/3' /></a>
                    <a href="https://www.instagram.com/robanu_dakhayin/" target='_blank' className="link d-flex justify-content-center align-items-center"><FaInstagram className='w-2/3 h-2/3' /></a>
                </div>
            </footer>
        </div>
    );
}