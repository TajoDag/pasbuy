import React from "react";
import { MenuUser } from "./components/MenuUser";
import { Tabs } from "./components/Tabs";

export default () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [activeMenu, setActiveMenu] = React.useState(user.isShop ? "1" : "2");
  return (
    <div className="user_container">
      <MenuUser setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <Tabs activeMenu={activeMenu} />
    </div>
  );
};
