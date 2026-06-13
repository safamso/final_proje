//Components//
import { Footer, Navbar, ShopPageHero } from "@/components";
//Section//
import {ContactInfoSection,ContactFormSection} from "@/sections";
//pageHero DB//
import { pageHero } from "@/db/pageHero";

export const ContactPage =()=>{
    return(
        <>
        <Navbar/>
        <ShopPageHero
          title={pageHero.contact.title} />
          <ContactInfoSection/>
          <ContactFormSection/>
          <Footer/>
        


   
        
        </>
    )
}