//DB pagehero//
import { pageHero } from "@/db/pageHero.js";
import { Footer, Navbar, Newsletter, ShopPageHero } from "@/components";
import {SingleProductPageSection,RelatedProducts} from "@/sections/index.js";


export const SingleProductPage = () => {
    return (
        <div>
            <Navbar />
            <ShopPageHero
                title={pageHero.shop.title_3} />
                <SingleProductPageSection/>
                <RelatedProducts/>
                <Newsletter/>
                <Footer/>



        </div>
    )
}