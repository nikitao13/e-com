import { createContext, useState, useEffect } from "react";
import { getAllProducts } from "../services/product-services";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products}}>
      {children}
    </ProductsContext.Provider>
  );
};
