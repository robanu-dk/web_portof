import Image from "next/image";
import { JSX } from "react";

interface PropsHeader {
    children: JSX.Element,
    cv: string,
    image_source: string,
}

export default function About({ children, cv, image_source }: PropsHeader) {
    return (
        <section className="section pt-6" id="about">
            {/* <!-- container --> */}
            <div className="container text-center">
                {/* <!-- about wrapper --> */}
                <div className="about">
                    <div className="about-img-holder">
                        <Image src={image_source} width={200} height={200} priority={false} alt="Robanu Dakhayin" className="about-img" />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        {children}
                        <a href={cv} className="btn-rounded btn btn-outline-primary mt-4" rel="noopener noreferrer" target="_blank" download>Download CV</a>
                    </div>
                </div> {/** <!-- end of about wrapper --> */}
            </div> {/** <!-- end of container --> */}
        </section>
    );
}