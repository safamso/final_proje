//CSS//
import "@components/Newsletter/Newsletter.css";


export const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container newsletter_container" >
                <div className="newsletter_content">
                    <h1 className="newsletter_title">Subscribe to our Newsletter</h1>
                    <p className="newsletter_text">Get e-mail updates about our latest shops and special offers</p>
                </div>

                <form className="newsletter_form" >
                    <input className="newsletter_input" type="email" placeholder="Enter email address" />
                    <button className="newsletter_button" type="submit">
                        Subscribe
                    </button>
                </form>

            </div>

        </section>
    )
}