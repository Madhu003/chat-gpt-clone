import React from "react";
import "./Sidebar.css";

const meniItems = [
  { title: "Meni 1" },
  { title: "Meni 1" },
  { title: "Meni 1" },
];
function Sidebar() {
  return (
    <div className="sidebar-container d-flex flex-column">
      <a className="border" href="#">
        New Chat
      </a>

      {meniItems.map((item) => (
        <a href={item.title}>{item.title}</a>
      ))}
    </div>
  );
}

export default Sidebar;
