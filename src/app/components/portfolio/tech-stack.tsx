import Image from 'next/image';

interface TechStackProps {
    id: number,
    title: string,
    icon_source: string,
}

interface ToolsProps {
    tech_stacks: TechStackProps[],
}

export default function TechStack({ tech_stacks }: ToolsProps) {
    return (
        <section className="section" id="tech-stacks">
            <div className="container text-center">
                <p className="section-subtitle">What I Use ?</p>
                <h2 className="section-title mb-6">Tech Stacks</h2>
                {/* <!-- row --> */}
                <div className="row">
                    {
                        tech_stacks.map((item) => {
                            return (
                                <div key={item.id} className="col-xsm-4 col-sm-4 col-md-3 col-lg-2 mt-4 hover:-translate-y-2 hover:shadow-lg">
                                    <div className="d-flex justify-content-center">
                                        <div className="body">
                                            <Image src={item.icon_source} alt={item.title} key={item.id} width={100} height={100} className="icon" />
                                            <h6 className="title">{item.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> {/** <!-- end of row --> */}
            </div>
        </section>
    );
}

export type { TechStackProps };