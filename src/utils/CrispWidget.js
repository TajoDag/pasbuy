import React, { useEffect } from "react";

const CrispWidget = ({ keyChat }) => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = keyChat;

    (function () {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return null;
};

export default CrispWidget;
