import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [inTotal, setInTotal] = useState(0);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    countPrice();
  }, [products]);

  const countPrice = () => {
    let cnt = 0;
    products.map((product) => {
      console.log(cnt)
      cnt += product.price * product.quantity;
    });
    setInTotal(cnt);
    console.log(cnt)
  };
  
  const loadProducts = () => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  };

  const addProduct = (product) => {
    const existingProduct = products.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedProducts = products.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity += 1) }
          : item
      );
      setProducts(updatedProducts);
      localStorage.setItem(JSON.stringify(products));
    } else {
      const stored = [...products, { ...product, quantity: 1 }];
      setProducts(stored);
      localStorage.setItem("products", JSON.stringify(products));
    }
  };

  const removeCart = () => {
    localStorage.removeItem("products");
    setProducts([]);
  };

  const removeIndiviulProduct = (product) => {
    const stored = products.filter((p) => p.id !== product.id);
    setProducts(stored);
    localStorage.setItem("products", JSON.stringify(products));
  };

  const data = {
    products,
    addProduct,
    removeCart,
    removeIndiviulProduct,
    inTotal,
  };
  return (
    <div>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
