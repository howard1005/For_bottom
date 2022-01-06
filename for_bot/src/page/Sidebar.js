import React from "react";
import { Link } from "react-router-dom";

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