/*CSS IMPORT */
import "@/sections/HomePageSections/HomePageCatagories.css";

/* Images */
import fruit from "@/assets/images/fruits.jpg";
import vagetables from "@/assets/images/vegetables.jpg";
import catagories from "@/assets/images/categories.jpg";
import juices from "@/assets/images/juices.jpg";
import dried from "@/assets/images/dried.jpg";

export const HomePageCatagories = () => {

    return(

        <div className="container catagories">

            {/* FRUIT */}
            <div
                className="catagorie_card catagorie_fruit"
                style={{ backgroundImage: `url(${fruit})` }}
            >
                <div className="catagorie_fruit_title">Fruit</div>
            </div>

            {/* VEGETABLES */}
            <div
                className="catagorie_card catagorie_vagetables"
                style={{ backgroundImage: `url(${vagetables})` }}
            >
                <div className="catagorie_vagetables_title">Vagetables</div>
            </div>

            {/* CENTER */}
            <div
                className="catagorie_card catagorie_center"
                style={{ backgroundImage: `url(${catagories})` }}
            >

                <div className="catagorie_info">

                    <h1 className="catagorie_info_name">
                        Vegetables
                    </h1>

                    <h2 className="catagorie_info_text">
                        Protect the health of every home
                    </h2>

                    <button className="catagorie_info_btn">
                        Shop Now
                    </button>

                </div>

            </div>

            {/* JUICES */}
            <div
                className="catagorie_card catagorie_juices"
                style={{ backgroundImage: `url(${juices})` }}
            >
                <div className="catagorie_juices_title">Juices</div>
            </div>

            {/* DRIED */}
            <div
                className="catagorie_card catagorie_dried"
                style={{ backgroundImage: `url(${dried})` }}
            >
                <div className="catagorie_dried_title">Dried</div>
            </div>

        </div>

    );
};