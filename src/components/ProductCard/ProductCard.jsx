import classes from "./ProductCard.module.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  selectedProduct,
  setSelectedProduct,
  handleCartClick,
}) => {

  const navigate = useNavigate();

  const handleSizeClick = (size) => {
    setSelectedProduct({ name: product.name, price: product.price, size, imageUrl: product.imageUrl, id: product.id, qty: 1 });
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className={classes.productCard}
      style={{ backgroundImage: `url(${product.imageUrl})` }}
    >
      <div className={classes.details}>
        <h3>{product.name}</h3>
        <p className={product.featured ? `${classes.price} ${classes.sale}` : classes.price}>${product.price}</p>
      </div>
      <div className={classes.filler} onClick={handleProductClick}></div>
      <div className={classes.sizesContainer}>
        <div className={classes.sizes}>
          {product.variants.map((size) => {
            const isSelected =
              selectedProduct &&
              selectedProduct.name === product.name &&
              selectedProduct.size === size;

            return (
              <span
                key={size}
                className={`${classes.size} ${
                  isSelected ? classes.selected : ""
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </span>
            );
          })}
        </div>
        <button
          className={classes.addToCart}
          onClick={() => handleCartClick(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
