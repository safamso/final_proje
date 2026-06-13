//CSS//
import "@components/ContactInfoCard/ContactInfoCard.css";

export const ContactInfoCard =(
    {
        title,
       text
    }
)=>{
    return(
        <section className="contact_info_card">
            <div className="contact_info_card_container">
                <h3 className="contact_info_card_title">{title}</h3> 
                <p className="contact_info_card_info">{text}</p>

            </div>

        </section>
    )
}