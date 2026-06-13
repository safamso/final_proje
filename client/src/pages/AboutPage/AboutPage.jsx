import { Footer, Navbar, Newsletter, ShopPageHero } from "@/components";
//DB pageHero//
import { pageHero } from "@/db/pageHero";
//Sections//
import { AboutWelcomeSection, AboutCounterSection } from "@/sections";
import { HomePageTestimonials, HomePageServices } from "@/sections/HomePageSections";
//CSS//
import "../AboutPage/AboutPage.css"

export const AboutPage = () => {
    return (
        <>
            <Navbar />
            <ShopPageHero
                title={pageHero.about.title} />
            <AboutWelcomeSection />
            <Newsletter />
            <AboutCounterSection />
            <HomePageTestimonials />
            <HomePageServices />
            <div className="footer_wrapper">
                <Footer />
            </div>



        </>
    )
}