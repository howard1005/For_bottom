import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"
import SidebarItem from "./SidebarItem";
import SidebarStyle from "../style/SidebarStyle.css"

function Sidebar() {

  const menus = [
    { name: "Home", path: "/" },
    { name: "인게임 정보", path: "/InGameInfo" },
    { name: "Trend", path: "/Trend" },
    { name: "Mate", path: "/Mate"},
    { name: "Youtube", path: "/Youtube"},
    { name: "Board", path: "/Board"}
  ];

  return (
    <div className="sidebar">
        <header>
            <div className ="image-text">
                <span className="logo-image">
                    {<img src={logo} alt="logo"></img>}
                </span>
                <div className="text header-text">
                    <span className="siteName">For-bottom</span>
                </div>
            </div>
        </header>
        {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;