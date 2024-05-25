import React from "react";
import { MenuUser } from "./components/MenuUser";
import { Tabs } from "./components/Tabs";

export default () => {
  const [activeMenu, setActiveMenu] = React.useState("1");
  return (
    <div className="user_container">
      <MenuUser setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <Tabs activeMenu={activeMenu} />
    </div>
  );
};
