import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./pages/Main-page";
import ListPage from "./pages/List-page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
