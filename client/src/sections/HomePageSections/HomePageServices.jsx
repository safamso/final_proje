{/* CSS IMPORT */ }
import "@/sections/HomePageSections/HomePageServices.css";

/* IMAGES */
import shipped from "@/assets/images/shipping.png";
import diet from "@/assets/images/diet.png";
import service from "@/assets/images/customer-service.png";
import award from "@/assets/images/award.png";

export const HomePageServices = () => {
    return (
        <div className="container services">
            <div className="service_card">
                <div className="service_icon pink">
                    <div className="icon_line">
                        <img className="service_icon_img" src={shipped} alt="shipping" />
                    </div>
                </div>
                <h3 className="service_title">Free Shipping</h3>
                <h4 className="service_subtitle">
                    On order over $100
                </h4>

            </div>
            {/* CARD */}
            <div className="service_card">

                <div className="service_icon yellow">
                    <div className="icon_line">
                        <img className="service_icon_img small_icon" src={diet} alt="fresh" />
                    </div>
                </div>

                <h3 className="service_title">Always Fresh</h3>

                <h4 className="service_subtitle">
                    Product well package
                </h4>

            </div>
            {/* CARD */}
            <div className="service_card">

                <div className="service_icon blue">
                    <div className="icon_line">
                        <img className="service_icon_img" src={award} alt="quality" />
                    </div>
                </div>
                <h3 className="service_title">Superior Quality</h3>
                <h4 className="service_subtitle">
                    Quality Products
                </h4>
            </div>
            {/* CARD */}
            <div className="service_card">
                <div className="service_icon yellow">
                    <div className="icon_line">
                        <img className="service_icon_img small_icon" src={service} alt="support" />
                    </div>
                </div>
                <h3 className="service_title">Support</h3>
                <h4 className="service_subtitle">
                    24/7 Support
                </h4>

            </div>

        </div>
    );
};