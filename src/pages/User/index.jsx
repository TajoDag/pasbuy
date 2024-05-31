import React from "react";
import { MenuUser } from "./components/MenuUser";
import { Tabs } from "./components/Tabs";
import { useActiveMenu } from "../../context/ActiveMenu";

export default () => {
  const { activeMenu, setActiveMenu } = useActiveMenu();

  return (
    <div className="user_container">
      <MenuUser setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <Tabs activeMenu={activeMenu} />
    </div>
  );
};
