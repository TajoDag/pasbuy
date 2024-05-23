// import React, { useEffect } from "react";

// const CrispWidget= () => {
//   useEffect(() => {
//     window.$crisp = [];
//     window.CRISP_WEBSITE_ID = "53744e9b-2ccf-4378-b4a2-e6f6e2d7be58";

//     (function () {
//       const d = document;
//       const s = d.createElement("script");
//       s.src = "https://client.crisp.chat/l.js";
//       s.async = true;
//       d.getElementsByTagName("head")[0].appendChild(s);
//     })();
//   }, []);

//   return null;
// };

// export default CrispWidget;

// import React, { useEffect } from "react";

// const CrispWidget = () => {
//   useEffect(() => {
//     window.$crisp = [];
//     window.CRISP_WEBSITE_ID = "53744e9b-2ccf-4378-b4a2-e6f6e2d7be58";

//     (function () {
//       const d = document;
//       const s = d.createElement("script");
//       s.src = "https://client.crisp.chat/l.js";
//       s.async = true;
//       d.getElementsByTagName("head")[0].appendChild(s);
//     })();
//   }, []);

//   const openChatAndSendMessage = (message) => {
//     if (window.$crisp) {
//       window.$crisp.push(["do", "chat:open"]);
//       window.$crisp.push(["do", "message:send", ["text", message]]);
//     }
//   };

//   return { openChatAndSendMessage };
// };

// export default CrispWidget;
import React, { useEffect } from "react";

const CrispWidget = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "53744e9b-2ccf-4378-b4a2-e6f6e2d7be58";

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
