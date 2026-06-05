import "./ShopPageHero.css";

import bgImage from "@/assets/images/bg_1.jpg";

export const ShopPageHero = ({ title,my_title }) => {

    return (

        <section
            className="page_hero"
            style={{ backgroundImage: `url(${bgImage})` }}
        >

            <div className="page_hero_overlay">
                <p className="page_hero_breadcrumb">
                    HOME / {title.toUpperCase()}
                </p>

                <h1 className="page_hero_title">
                   {my_title} {title}
                </h1>
            </div>
        </section>

    );

};