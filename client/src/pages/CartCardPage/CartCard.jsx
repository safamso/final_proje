//Components//
import { Footer, Navbar, Newsletter, ShopPageHero } from "@/components";
//Db pageHero//
import { pageHero } from "@/db/pageHero.js";
//CartSection//
import {CartSection,CartCouponSection} from "@/sections/"

export const CartCard = () => {
    return (
        <div>
            <Navbar />
            <ShopPageHero
                my_title={pageHero.shop.my_title}
                title={pageHero.shop.title_4} />
                <CartSection/>
                <CartCouponSection/>
                <Newsletter/>
                <Footer/>

        </div>
    )
}