import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import { useSelector } from "react-redux";
import HeaderLayout from "../components/Header/HeaderLayout";

const Router = () => {
  const theme = useSelector((state) => state.Theme.theme);
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme[theme]}>
        <GlobalStyles />
        <HeaderLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Routes>
        </HeaderLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
