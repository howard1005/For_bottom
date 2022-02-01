import React from "react";

function SidebarItem({ menu, icons }) {
  return (
    <div className="sidebar-item">
      <p>{menu.icons}{menu.name}</p>
    </div>
  );
}

export default SidebarItem;