//Components//
import { Navbar, ShopPageHero, CategoryFilter,Newsletter,Footer } from "@/components";
//DB//
import { pageHero } from "@/db/pageHero.js";
//Sections//
import { PaginationSection, ShopPageProducts } from "@/sections/ShopPageSections";



export const ShopPage = () => {
    return (
        <div>
            <Navbar />
            <ShopPageHero
                title={pageHero.shop.title} />
            <CategoryFilter />
            <ShopPageProducts />
            <PaginationSection />
            <Newsletter />
            <Footer />


        </div>
    )
}