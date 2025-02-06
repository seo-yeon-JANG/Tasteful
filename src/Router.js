import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./pages/Main-page";
import ListPage from "./pages/List-page";
import Header from "./components/Header";
import DetailPage from "./pages/List-detailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/list/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
