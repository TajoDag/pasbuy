import React, { useState } from "react";
import { Button, Dropdown, Menu, Select, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import flagEn from "@assets/images/flags/en.png";
import flagCn from "@assets/images/flags/cn.png";
import flagVn from "@assets/images/flags/vn.png";
import flagPt from "@assets/images/flags/pt.png";
import { useLocalization } from "./../../../../../context/LocalizationWrapper";
import TranslateTing from "../../../../../components/Common/TranslateTing";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../../../../../context/CurrencyContext";

const TopbarH = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isLogin"));
  const storedLanguage = localStorage.getItem("locale") || "en";
  const { switchLocale } = useLocalization();
  const { currency, switchCurrency } = useCurrency();
  const [language, setLanguage] = useState(storedLanguage);
  const navigate = useNavigate();
  const languages = [
    {
      key: "en",
      label: "English",
      icon: <img style={{ marginRight: 8 }} src={flagEn} />,
    },
    {
      key: "zh",
      label: "简体中文",
      icon: <img style={{ marginRight: 8 }} src={flagCn} />,
    },
    {
      key: "vi",
      label: "Tiếng Việt",
      icon: <img style={{ marginRight: 8 }} src={flagVn} />,
    },
    {
      key: "pt",
      label: "Portugal",
      icon: <img style={{ marginRight: 8 }} src={flagPt} />,
    },
  ];

  const currencys = [
    {
      key: "USD",
      label: <TranslateTing text="dolla" />,
    },
    {
      key: "VND",
      label: <TranslateTing text="vnd" />,
    },
    {
      key: "CNY",
      label: <TranslateTing text="cny" />,
    },
  ];
  const handleChangeLanguages = (value) => {
    setLanguage(value);
    switchLocale(value);
  };
  const handleChangeCurrencys = (value) => {
    // setCurrency(value);
    switchCurrency(value);
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
      onClick={(e) => handleChangeCurrencys(e.key)}
      items={currencys}
      selectedKeys={[currency]}
    />
  );
  const getLabel = (list, key) => list.find((item) => item.key === key)?.label;
  const handleLogout = () => {
    window.localStorage.clear();

    navigate("/");
    window.location.reload();
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
          </Space>
        </div>
        {isAuthenticated ? (
          <div className="auth-buttons">
            <Button onClick={() => navigate("/user")} type="link">
              <TranslateTing text="myPanel" />
            </Button>
            <span className="divider"></span>
            <Button onClick={handleLogout} type="link">
              <TranslateTing text="logout" />
            </Button>
          </div>
        ) : (
          <div className="auth-buttons">
            <Button onClick={() => navigate("/login")} type="link">
              <TranslateTing text="login" />
            </Button>
            <span className="divider"></span>
            <Button onClick={() => navigate("/register")} type="link">
              <TranslateTing text="register" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopbarH;
