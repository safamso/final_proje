
//Components//
import { Footer, Navbar, ShopPageHero, } from "@/components";
//pageHero DB//
import { pageHero } from "@/db/pageHero";
import { BlogPageSection } from "@/sections";
//CSS//
import "../BlogPage/BlogPage.css";


export const BlogPage = () => {
    return (
        <>
            <Navbar />
            <ShopPageHero
                title={pageHero.blog.title} />
            <BlogPageSection />
            <div className="footer_wrapper">
                <Footer />
            </div>


        </>
    )
}