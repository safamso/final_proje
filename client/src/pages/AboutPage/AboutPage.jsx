import { Navbar, Newsletter, ShopPageHero } from "@/components";
//DB pageHero//
import { pageHero } from "@/db/pageHero";
//Sections//
import { AboutWelcomeSection,AboutCounterSection } from "@/sections";

export const AboutPage = () => {
    return (
        <>
            <Navbar />
            <ShopPageHero
                title={pageHero.about.title} />
            <AboutWelcomeSection />
            <Newsletter/>
            <AboutCounterSection/>



        </>
    )
}