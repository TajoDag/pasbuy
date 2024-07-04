import { SearchOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import logo from "@assets/images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
const HeaderL = ({ img }) => {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    if (search.trim() !== "") {
      navigate("/products", {
        state: { query: search },
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  const intl = useIntl();
  const placeholderText = intl.formatMessage({ id: "placeholderSearch" });
  return (
    <header className="header_shop">
      {showInput ? (
        <div className="header_content onSearch">
          <div className="header_left">
            <ArrowLeftOutlined
              className="icon_back"
              onClick={() => setShowInput(!showInput)}
            />
          </div>
          <div className="header_right">
            <div className="search-bar">
              <input
                type="text"
                placeholder={placeholderText}
                className="search-input"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button className="search-button" onClick={onSearch}>
                <SearchOutlined />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="header_content">
          <div className="header_logo">
            <img src={img} className="logo" onClick={() => navigate("/")} />
          </div>
          <div className="search-bar-mobile">
            <button
              className="search-button"
              onClick={() => setShowInput(!showInput)}
            >
              <SearchOutlined />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default HeaderL;
