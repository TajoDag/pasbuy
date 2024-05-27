import React, { useEffect, useState } from "react";
import { getLiveChat } from "../api/utils/livechat";

const CrispWidget = ({ keyLiveChat }) => {

  useEffect(() => {
    if (keyLiveChat) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = keyLiveChat;

      (function () {
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    }
  }, [keyLiveChat]);

  return null;
};

export default CrispWidget;
