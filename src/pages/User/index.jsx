import React from "react";
import { Menu } from "./components/Menu";
import { Tabs } from "./components/Tabs";

export default () => {
  const [activeMenu, setActiveMenu] = React.useState("1");
  return (
    <div className="user_container">
      <Menu setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <Tabs activeMenu={activeMenu} />
    </div>
  );
};
