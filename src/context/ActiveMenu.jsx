import React, { createContext, useContext, useState } from "react";

const ActiveMenuContext = createContext();

export const useActiveMenu = () => {
  const context = useContext(ActiveMenuContext);
  if (!context) {
    throw new Error("for got combined");
  }
  return context;
};

export const MenuProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [activeMenu, setActiveMenu] = useState(user.isShop ? "1" : "2");
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <ActiveMenuContext.Provider
      value={{ activeMenu, setActiveMenu, openMenu, setOpenMenu }}
    >
      {children}
    </ActiveMenuContext.Provider>
  );
};
