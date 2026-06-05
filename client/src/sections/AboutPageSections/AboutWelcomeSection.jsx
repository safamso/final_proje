//CSS//
import "./AboutWelcomeSection.css";
//BG image//
import aboutImage from "@/assets/images/about.jpg";
//React Icons//
import { FaPlay } from "react-icons/fa6";


export const AboutWelcomeSection = () => {
    return (
        <section className="about_main_container">
            <div className="about_welcome container">
                <div className="about_welcome_image_box" style={{ backgroundImage: `url(${aboutImage})` }} >
                    <a
                        href="https://vimeo.com/45830194"
                        target="_blank"
                        rel="noreferrer"
                        className="about_welcome_img_btn"
                    >
                        <FaPlay className="about_welcome_img_btn_icon" />
                    </a>

                </div>
                <div className="about_welcome_content">
                    <h2 className="about_welcome_title">
                        Welcome to Vegefoods an eCommerce website
                    </h2>
                    <p className="about_welcome_text">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                    <p className="about_welcome_text">
                        But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                    </p>
                    <button className="about_welcome_btn">
                        Shop now
                    </button>
                </div>
            </div>
        </section>
    );
};