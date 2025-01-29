import Image from 'next/image';

interface PropsTools {
    tools: {
        id: number,
        title: string,
        icon_source: string,
    }[],
}

export default function Tools({ tools }: PropsTools) {
    return (
        <section className="section" id="tools">
            <div className="container text-center">
                <p className="section-subtitle">What I Use ?</p>
                <h6 className="section-title mb-6">Tools</h6>
                {/* <!-- row --> */}
                <div className="row">
                    {
                        tools.map((item) => {
                            return (
                                <div key={item.id} className="col-md-6 col-lg-2 mt-4">
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