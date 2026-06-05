import { Navbar, ShopPageHero } from "@/components";
import { pageHero } from "@/db/pageHero.js"
import { WishlistPageSections } from "@/sections/WishlistPageSections/WishlistProducts";

export const WishlistPage = () => {
    return (
        <div>
            <Navbar />
            <ShopPageHero
                my_title={pageHero.shop.my_title}
                title={pageHero.shop.title_2} />
            <WishlistPageSections />

        </div>
    )
}