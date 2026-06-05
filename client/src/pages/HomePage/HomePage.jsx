import { Navbar,Newsletter,Footer } from "../../components";
import {
    HomePageHero,
    HomePageServices,
    HomePageCatagories,
    HomePageProducts,
    HomePageDeal, 
    HomePageTestimonials,
    HomePagePartners
} from "@/sections/HomePageSections/index.js";



export const HomePage = ()=>{
    return(
        <>
       <Navbar/>
       <HomePageHero/>
       <HomePageServices/>
       <HomePageCatagories/>
       <HomePageProducts/>
       <HomePageDeal/>
       <HomePageTestimonials/>
       <HomePagePartners/>
       <Newsletter/>
       <Footer/>

        </>
    )
}