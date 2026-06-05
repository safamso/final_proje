import "../HomePageSections/HomePageHero.css";
import hero1 from "@/assets/images/bg_2.jpg";
import hero2 from "@/assets/images/bg_1.jpg";
import hero3 from "@/assets/images/bg_3.jpg";
import { useEffect, useState } from "react";


export const HomePageHero = () => {
    const slides = [
  {
    image: hero1,
    title: "We serve Fresh Vegetables & Fruits",
  },

  {
    image: hero2,
    title: "100% Fresh & Organic Foods",
  },

  {
    image: hero3,
    title: "Natural Farm Products",
  }
];
useEffect(()=> {
    const interval = setInterval(()=>{
        setCurrent((prev)=>
            prev === slides.length-1 ? 0:prev + 1
    ) ;
    },4000);
    return () => clearInterval(interval);



},[]);
const [current , setCurrent]= useState(0);

    return (
        <div className="hero" style={{backgroundImage:`url(${slides[current].image})`}}>
            <div className="hero_content">
                <h1 className="hero_content_info" >{slides[current].title}</h1>
                <h2 className="hero_content_info_deliver">We deliver organic vegetables &amp; fruits</h2>
                <button className="hero_content_button">View Detalis</button>
            </div>

        </div>

    )
}