import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import StudiesAndCertifications from "./pages/StudiesAndCertifications";
import Reviews from "./pages/Reviews";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      {" "}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="studies" element={<StudiesAndCertifications />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="order" element={<Order />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
