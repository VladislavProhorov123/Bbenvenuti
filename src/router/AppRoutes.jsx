import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Product from "../pages/Product";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contacts from "../pages/Contacts";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path='/products' element={<Products />} />
        
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
