import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"
import SidebarItem from "./SidebarItem";
import SidebarStyle from "../style/SidebarStyle.css"
import {BiHomeAlt} from "react-icons/bi"
import {HiInformationCircle} from "react-icons/hi"
import {IoMdTrendingUp} from "react-icons/io"
import {FaUserFriends} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"
import {IoMdClipboard} from "react-icons/io"

function Sidebar() {

  const menus = [
    { name: "Home", path: "/", icons :<BiHomeAlt></BiHomeAlt>},
    { name: "인게임 정보", path: "/InGameInfo", icons: <HiInformationCircle></HiInformationCircle> },
    { name: "Trend", path: "/Trend", icons: <IoMdTrendingUp></IoMdTrendingUp> },
    { name: "Mate", path: "/Mate", icons: <FaUserFriends></FaUserFriends>},
    { name: "Youtube", path: "/Youtube", icons: <BsYoutube></BsYoutube>},
    { name: "Board", path: "/Board", icons: <IoMdClipboard></IoMdClipboard>}
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
              icons = {menu.icons}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;