
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "@scss/styles.scss";
import "antd/dist/reset.css";
import "swiper/css";
import { LocalizationProvider } from "./context/LocalizationWrapper";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./stores";
import { CurrencyProvider } from "./context/CurrencyContext";
import CrispWidget from "./utils/CrispWidget";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider>
          <CurrencyProvider>
            <BrowserRouter>
              <AppRoutes />

            </BrowserRouter>
          </CurrencyProvider>
        </LocalizationProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
