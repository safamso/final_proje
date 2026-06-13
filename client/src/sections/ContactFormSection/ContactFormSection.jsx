//CSS//
import "../ContactFormSection/ContactFormSection.css";

export const ContactFormSection = () => {
    return (
        <section className="contact_form_section">
            <div className="container contact_form_grid">
                <div className="contact_form_grid_left">
                    <iframe
                        className="contact_map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.106484899959!2d121.03281037814948!3d14.593007649517013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c82ded421825%3A0xc24dce2af1316426!2sCountry%20Vegefoods%2C%20Inc.!5e0!3m2!1sen!2saz!4v1781161667902!5m2!1sen!2saz"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
                <div className="contact_form_grid_right">
                    <div className="contact_from_group">
                        <div className="from_group">
                            <input className="from_group_input" type="text" placeholder="Your Name" />
                        </div>
                        <div className="from_group">
                            <input className="from_group_input" type="text" placeholder="Your Email" />
                        </div>
                        <div className="from_group">
                            <input className="from_group_input" type="text" placeholder="Subject" />
                        </div>

                        <textarea className="from_group_text_area" name="" id="" placeholder="Message" />
                        <div>
                            <button className="from_group_btn" >Send Message</button>

                        </div>
                    </div>


                </div>



            </div>



        </section>
    )
}