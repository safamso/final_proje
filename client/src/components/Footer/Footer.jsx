//CSS//
import "@components/Footer/Footer.css";
//ICONS//
import {  FaHeart, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope ,FaAngleUp} from "react-icons/fa6";
export const Footer = () => {
    return (
        <footer className="footer">
            <button className="scroll_top_btn">
                <FaAngleUp className="scroll_top_btn_icon" />
            </button>
            <div className="container">
                <div className="footer_grid">
                    <div className="footer_brand">
                        <h1 className="footer_brand_title">Vegefoods</h1>
                        <div className="footer_brand_content">
                            <p className="footer_brand_away">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <div className="footer_brand_icon_grid">
                            <div className="footer_brand_icons"><FaTwitter className="footer_brand_icons_size" /></div>
                            <div className="footer_brand_icons"><FaFacebookF className="footer_brand_icons_size" /> </div>
                            <div className="footer_brand_icons"> <FaInstagram className="footer_brand_icons_size" /> </div>
                            </div>
                           

                        </div>

                    </div>
                    <div className="footer_menu">
                        <h1 className="footer_menu_title">Menu</h1>
                        <div className="footer_menu_section">
                            <p className="footer_menu_item">Shop</p>
                            <p className="footer_menu_item">About</p>
                            <p className="footer_menu_item">Journal</p>
                            <p className="footer_menu_item">Contact Us</p>
                        </div>

                    </div>
                    <div className="footer_help">

                        <h1 className="footer_help_title">Help</h1>
                        <div className="footer_help_section">
                            <div className="footer_help_section_left" >
                                <p className="footer_help_section_left_title">Shipping Information</p>
                                <p className="footer_help_section_left_title" >Returns & Exchange</p>
                                <p className="footer_help_section_left_title">Terms & Conditions</p>
                                <p className="footer_help_section_left_title">Privacy Policy</p>

                            </div>
                            <div className="footer_help_section_right">
                                <p className="footer_help_section_right_title">FAQs</p>
                                <p className="footer_help_section_right_title">Contact</p>

                            </div>

                        </div>

                    </div>
                    <div className="footer_contact">
                        <h1 className="footer_contact_title"> Have a Questions?</h1>
                        <div className="footer_contact_section">
                            <div className="footer_contact_section_left">
                                <FaLocationDot className="footer_contact_section_left_icons" />
                                <FaPhone className="footer_contact_section_left_icon_phone" />
                                <FaEnvelope className="footer_contact_section_left_icon_envelope" />

                            </div>
                            <div className="footer_contact_section_right">
                                <p className="footer_contact_section_right_info">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                <p className="footer_contact_section_right_info">+2 392 3929 210</p>
                                <p className="footer_contact_section_right_info">info@yourdomain.com</p>

                            </div>

                        </div>

                    </div>
                </div>
                <p className="footer_copy">
                    Copyright ©2026 All rights reserved |
                    This template is made with
                    <FaHeart className="footer_heart" />
                    by
                    <span className="footer_copy_colorlib" >Colorlib</span>
                </p>

            </div>

        </footer>
    )
}