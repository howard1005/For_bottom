import React from "react";

function SidebarItem({ menu, icons }) {
  return (
    <div className="sidebar-item">
      <div className="sidebar-menu">
            <span className="sidebar-menu-icons">{menu.icons}</span>
            <span className="sidebar-menu-texts">{menu.name}</span>
      </div>
    </div>
  );
}

export default SidebarItem;