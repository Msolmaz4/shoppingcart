import React from "react";
import Detail from "./Section/Detail";
import Products from "./Section/Products";
import { Route } from "react-router-dom";

const Section = () => {
  return (
    <div>
      <section>
        <Route path="/products" element={<Products />} />
        <Route path="/products/id" element={<Detail />} />
      </section>
    </div>
  );
};

export default Section;
