
import React from 'react';
import { useState, useEffect } from "react";
import "./ProductView.css"
// import { useHistory } from "react-router-dom";

import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";

function ProductView({ products }) {

  // TODO: Replace with state variable
  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState("")
  const [selected, setSelected]=useState(false)
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list" >
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              isSelected = {selected === item.id ? true : false}
              onClick={() =>{setSelectedProduct(item);setSelected(item.id)}}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() =>
               sideOpen===true ? setSideOpen(false):setSideOpen(true)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
