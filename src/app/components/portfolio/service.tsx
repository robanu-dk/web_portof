'use client';

import Image from 'next/image'

interface PropServices {
    services: {
        id: number,
        title: string,
        list_services: string[],
        source: string,
    }[],
}

export default function Service({ services }: PropServices) {
    return (
        <section className="section" id="services">
            <div className="container text-center">
                <p className="section-subtitle">What I Do ?</p>
                <h6 className="section-title mb-6">Services</h6>
                {/* <!-- row --> */}
                <div className="row d-flex justify-content-center">
                    {
                        services.map((item) => {
                            return (
                                <div key={item.id} className="col-md-6 col-lg-3">
                                    <div className="service-card hover:-translate-y-2 hover:shadow-lg">
                                        <div className="body">
                                            <div className='d-flex justify-content-center'>
                                                <Image src={item.source} alt={item.title} key={item.id} width={800} height={800} className='icon' />
                                            </div>
                                            <h6 className="title">{item.title}</h6>
                                            <ul className="subtitle mt-3">
                                                {
                                                    item.list_services.map((service, index) => {
                                                        return (
                                                            <li key={index}>{service}</li>
                                                        );
                                                    })
                                                }
                                            </ul>
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