import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"
import SidebarItem from "./SidebarItem";
import SidebarStyle from "../style/SidebarStyle.css"
import {BiBody, BiHomeAlt} from "react-icons/bi"
import {HiInformationCircle} from "react-icons/hi"
import {IoMdTrendingUp} from "react-icons/io"
import {FaUserFriends} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"
import {IoMdClipboard} from "react-icons/io"
import {BsFillMoonFill} from "react-icons/bs"
import {BsSunFill} from "react-icons/bs"



function Sidebar() {

  const menus = [
    { name: "Home", path: "/", icons :<BiHomeAlt></BiHomeAlt>},
    { name: "인게임 정보", path: "/InGameInfo", icons: <HiInformationCircle></HiInformationCircle> },
    { name: "Trend", path: "/Trend", icons: <IoMdTrendingUp></IoMdTrendingUp> },
    { name: "Mate", path: "/Mate", icons: <FaUserFriends></FaUserFriends>},
    { name: "Youtube", path: "/Youtube", icons: <BsYoutube></BsYoutube>},
    { name: "Board", path: "/Board", icons: <IoMdClipboard></IoMdClipboard>}
  ];

  function modeClick(){
    console.log(2);
    //body.classList.toggle("dark");
  }

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
      <div class="mode">
        <div className="moon-sun">
            <div className="moon-sun-icons">
                <span className="moon"><BsFillMoonFill></BsFillMoonFill></span>
                <span className="sun"><BsSunFill></BsSunFill></span>
            </div>
            <div className="mode-text">Dark Mode</div>
        </div>
    
        
        <div class ="toggle-switch" onClick={modeClick}>
            <span className="swtich"></span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;