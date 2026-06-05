
//Components//
import { Navbar, ShopPageHero, } from "@/components";
//pageHero DB//
import { pageHero } from "@/db/pageHero";
import { BlogPageSection } from "@/sections";


export const BlogPage = () => {
    return (
        <>
            <Navbar />
            <ShopPageHero
                title={pageHero.blog.title} />
            <BlogPageSection />


        </>
    )
}