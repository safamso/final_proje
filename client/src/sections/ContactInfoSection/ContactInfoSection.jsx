//CSS//
import "../ContactInfoSection/ContactInfoSection.css";
//ConractCard//
import {ContactInfoCard} from "@components";
//conctactInfo DB//
import { contactInfo } from "@/db/contactInfo";

export const ContactInfoSection = () =>{
    return(
        <section className="contact_info_section">
           <div className="container contact_info_section_grid">
            {contactInfo.map((item)=>
                 <ContactInfoCard
                 key={item.id}
                 title={item.title}
                 text={item.text}
                 
                 />
            

            )


            }
           </div>

        </section>
    )
}