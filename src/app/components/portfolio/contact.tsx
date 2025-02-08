'use client';

import { RefObject, useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface ContactProps {
    whatsapp_no: string,
}

const WHATSAPP_URL = 'https://wa.me/';

function SubmitForm(ref: RefObject<HTMLFormElement | null>, whatsapp_no: string) {
    const form = ref.current;

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (form != null) {
            const data = new FormData(form);

            const dataObj: { [key: string]: string } = {};

            data.forEach((value, key) => {
                dataObj[key as string] = value as string;
            })

            const message = `*Nama:* ${dataObj.name}%0A*Pesan:*%0A${dataObj.message}`;

            window.open(`${WHATSAPP_URL}${whatsapp_no}?text=${message}`);
        }
    }

    useEffect(() => {
        form?.addEventListener('submit', handleSubmit);

        return () => {
            form?.removeEventListener('submit', handleSubmit);
        }
    });
}

export default function ContactMe({ whatsapp_no }: ContactProps) {

    const form_ref = useRef<HTMLFormElement | null>(null);

    // Function untuk handling submit form
    SubmitForm(form_ref, whatsapp_no);

    return (
        <section className="section" id="contact">
            <div className="container text-center">
                <p className="section-subtitle">How can you communicate?</p>
                <h2 className="section-title mb-5">Contact Me</h2>
                {/* <!-- contact form --> */}
                <form ref={form_ref} id='contact-me-form' className="contact-form col-md-10 col-lg-8 m-auto">
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input name='name' type="text" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="form-group col-sm-12">
                            <textarea name="message" id="message" rows={6} className="form-control" placeholder="Write Something"></textarea>
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <button type="submit" className="btn btn-outline-primary rounded">
                                <div className='flex gap-default align-items-center'>
                                    <FaWhatsapp />Send Message
                                </div>
                            </button>
                        </div>
                    </div>
                </form> {/** <!-- end of contact form --> */}
            </div> {/** <!-- end of container --> */}
        </section>
    );
}

export type { ContactProps };