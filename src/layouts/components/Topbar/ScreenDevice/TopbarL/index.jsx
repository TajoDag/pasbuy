import React, { useState } from "react";
import { Button, Dropdown, Menu, Select, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import flagEn from "@assets/images/flags/en.png";
import flagCn from "@assets/images/flags/cn.png";
import flagVn from "@assets/images/flags/vn.png";
import { useLocalization } from "../../../../../context/LocalizationWrapper";
import { useNavigate } from "react-router-dom";

const TopbarL = () => {
  const isAuthenticated = localStorage.getItem("isLogin");
  const navigate = useNavigate();
  const { switchLocale } = useLocalization();
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("USD");
  const languages = [
    {
      key: "en",
      label: "English",
      icon: <img style={{ marginRight: 8 }} src={flagEn} />,
    },
    {
      key: "cn",
      label: "简体中文",
      icon: <img style={{ marginRight: 8 }} src={flagCn} />,
    },
    {
      key: "vi",
      label: "Tiếng Việt",
      icon: <img style={{ marginRight: 8 }} src={flagVn} />,
    },
  ];

  const currencys = [
    {
      key: "USD",
      label: "United States Dollar $",
    },
    {
      key: "EURO",
      label: "Euro €",
    },
  ];
  const handleChangeLanguages = (value) => {
    setLanguage(value)
    switchLocale(value);
  };
  const languageMenu = (
    <Menu
      onClick={(e) => handleChangeLanguages(e.key)}
      items={languages}
      selectedKeys={[language]}
    />
  );

  const currencyMenu = (
    <Menu
      onClick={(e) => setCurrency(e.key)}
      items={currencys}
      selectedKeys={[currency]}
    />
  );
  const getLabel = (list, key) => list.find((item) => item.key === key)?.label;
  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <header className="topbar">
      <div className="content">
        <div className="language-currency">
          <Space size={24}>
            <Dropdown
              overlay={languageMenu}
              trigger={["click"]}
              overlayStyle={{ width: 200 }}
            >
              <div
                className="selected-language"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  <span>
                    {languages.find((lang) => lang.key === language).icon}
                    {getLabel(languages, language)}
                  </span>
                  <DownOutlined
                    style={{ fontSize: 13, opacity: 0.6, color: "inherit" }}
                  />
                </Space>
              </div>
            </Dropdown>
          </Space>
        </div>
        <div className="auth-buttons">
          <Dropdown overlay={currencyMenu} trigger={["click"]}>
            <div
              className="selected-language"
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                <span>{getLabel(currencys, currency)}</span>
                <DownOutlined
                  style={{ fontSize: 13, opacity: 0.6, color: "inherit" }}
                />
              </Space>
            </div>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
export default TopbarL;
