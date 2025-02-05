import ProductCard from "../ProductCard/ProductCard.jsx";
import { useContext } from "react";
import classes from "./Products.module.scss";
import { ProductsContext } from "../../context/ProductsContext.jsx";

const Products = ({ selectedProduct, setSelectedProduct, handleCartClick }) => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <div className={classes.header}>
        <h1>Products</h1>
      </div>
      <div className={classes.products}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            handleCartClick={handleCartClick}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
