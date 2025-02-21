'use client';

import Image from 'next/image'

interface ServiceProps {
    id: number,
    title: string,
    list_services: string[],
    source: string,
}

interface ServicesProps {
    services: ServiceProps[],
}

export default function Service({ services }: ServicesProps) {
    return (
        <section className="section" id="services">
            <div className="container text-center">
                <p className="section-subtitle">What I Do ?</p>
                <h2 className="section-title mb-6">Services</h2>
                <div className="text-muted font-bold text-xs text-start mb-2 lg:hidden">
                    *Click to see the details
                </div>
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
                                            <ul className="subtitle mt-3 mx-4 list-disc">
                                                {
                                                    item.list_services.map((service, index) => {
                                                        return (
                                                            <li key={index} className='font-normal text-sm xl:text-base 2xl:text-lg'>{service}</li>
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
                </div>
                {/** <!-- end of row --> */}
            </div>
        </section>
    );
}

export type { ServiceProps };