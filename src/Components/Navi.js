import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import logo from "../img/birkil.jpg";

function Navi() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
      
        <div className="navbar">
          {/* <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link> */}
          
        </div>

        <nav className="nav-menu active">
          {" "}
          {/* Nav menüsünü varsayılan olarak aktif olarak görüntülemek */}
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <div className="logo-container">
                <img src={logo} alt="Birkil Logo" className="logo-image" />
              </div>
              {/* <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link> */}
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="naviSpan">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navi;
