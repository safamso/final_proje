import { useState } from "react";
//CSS//
import "./navbar.css";
//Icons//
import { PiTelegramLogoThin, PiPhoneLight, PiShoppingCartFill } from "react-icons/pi";
import { RiArrowDownSFill,RiMenu2Fill } from "react-icons/ri";
//React Router//
import { Link } from "react-router-dom";
//Hooks//
import { useStickyNavbar } from "@/hooks";
// ///
import{NavDropdown} from "@components/Navbar/NavDropdown.jsx"

export const Navbar = () => {
const [Open,setOpen]=useState(false);
const sticky = useStickyNavbar();
  return (
    <div className="navbar">

      {/* TOP */}
      <div className="navbar_top">
        <div className="container navbar_top_container">
          <h3 className="navbar_top_item">
            <PiPhoneLight /> + 1235 2355 98
          </h3>
          <h3 className="navbar_top_item">
            <PiTelegramLogoThin /> youremail@email.com
          </h3>

          <h3 className="navbar_top_item">
            3-5 Business days delivery & Free Returns
          </h3>
        </div>
      </div>

      {/* BOTTOM */}
        <div
                className={
                    sticky
                        ? "navbar_bottom active_navbar"
                        : "navbar_bottom"
                }
            >
               <div className="navbar_bottom">
        <div className="container navbar_bottom_container">

          <div className="navbar_logo">
            <h1>Vegefoods</h1>
          </div>
          {/*Navbar Menu*/}

          <div className={`navbar_menu ${Open ? "active" : " "}`}>
            <Link to="/" className="navbar_menu_item" href="">Home</Link>
            <div className="nav_dropdown_parent">
              <Link to="/shop" className="navbar_menu_item " href="">Shop <RiArrowDownSFill />
           
            </Link>
               {/*  DROPDOWN BURDA*/}
            <NavDropdown/>
            </div>
            

            <Link to = "/about" className="navbar_menu_item" href="">About</Link>
            <Link to = "/blog" className="navbar_menu_item" href="">Blog</Link>
            <Link className="navbar_menu_item" href="">Contact</Link>
            <Link className="navbar_menu_item cart" href="">
              <PiShoppingCartFill /> [0]
            </Link>
          </div>

          {/*Hamburger*/ }
          
      <div className="hamburger" onClick={()=> setOpen(!Open)} >
        <RiMenu2Fill />

        
      </div>

        </div>
      </div>
            </div>
     
      

    </div>
  );
};