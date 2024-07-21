import React, { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../api/utils/auth";
import useRefresh from "../hooks/useRefresh";

const ActiveMenuContext = createContext();

export const useActiveMenu = () => {
  const context = useContext(ActiveMenuContext);
  if (!context) {
    throw new Error("for got combined");
  }
  return context;
};

export const MenuProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState({});
  const [refresh, refecth] = useRefresh();
  // useEffect(() => {
  //   const getUserDt = async () => {
  //     try {
  //       const rp = await getUser();
  //       if (rp.status) {
  //         setDataUser(rp.result);
  //       }
  //     } catch (err) {

  //     }
  //   };
  //   getUserDt();
  // }, [])
  const [activeMenu, setActiveMenu] = useState(dataUser && dataUser?.role === "agency" ? "1" : "2");
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <ActiveMenuContext.Provider
      value={{ activeMenu, setActiveMenu, openMenu, setOpenMenu }}
    >
      {children}
    </ActiveMenuContext.Provider>
  );
};
