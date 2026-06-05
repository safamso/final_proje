//CSS//
import "@components/Navbar/NavDropdown.css";
//DB Navigation//
import {shopLinks} from "@/db/navigation.js";

//LINK router//
import { Link } from "react-router-dom";
export const NavDropdown = () => {
    return (
        <div className="nav_dropdown">
            <div className="nav_dropdown_menu">
                {shopLinks.map((item)=>(
                    <Link
                    key={item.id}
                    to={item.path}
                    className="nav_dropdown_link"
                    >
                    {item.title}
                    
                    </Link>
                ))}

            </div>

        </div>
    )
}