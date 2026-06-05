//CSS//
import "@/sections/HomePageSections/HomePagePartners.css"
//Images//
import partner_1 from "@/assets/images/partner_1.png";
import partner_2 from "@/assets/images/partner_2.png";
import partner_3 from "@/assets/images/partner_3.png";
import partner_4 from "@/assets/images/partner_4.png";
import partner_5 from "@/assets/images/partner_5.png";

export const HomePagePartners=()=>{
    return(
        <section className="partners_section">
            <div className="partners_line"></div>
            <div className=" container partners">
            <img className="partners_img" src={partner_1} alt="Microsoft" />
            <img className="partners_img" src={partner_2} alt="Android" />
            <img className="partners_img"  src={partner_3} alt="Java" />
            <img className="partners_img" src={partner_4} alt="Google" />
            <img className="partners_img"  src={partner_5} alt="Adobe" />

            </div>
            
        </section>
    )
}