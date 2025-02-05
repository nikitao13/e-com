import classes from "./Product.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartModal from "../../components/CartModal/CartModal";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleCartClick = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }

    setIsModalVisible(true);

    addToCart({
      name: product.name,
      price: product.price,
      size: selectedSize,
      imageUrl: product.imageUrl,
      id: product.id,
      qty: 1,
    });

    setTimeout(() => {
      setIsModalVisible(false);
      setSelectedSize(null);
      navigate("/");
    }, 1500);
  };

  return (
    <div className={classes.product}>
      <CartModal
        item={product}
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
      <Header />
      <main className={classes.main}>
        <h1 className={classes.name}>{product.name}</h1>
        <div className={classes.productInfo}>
          <img src={product.imageUrl} alt={product.name} />
          <div className={classes.lowerInfo}>
            <div className={classes.productData}>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.quantity} left!</p>
            </div>
            <div className={classes.sizes}>
              {product.variants.map((variant) => (
                <span
                  key={variant}
                  className={`${classes.size} ${
                    variant === selectedSize ? classes.selected : ""
                  }`}
                  onClick={() => setSelectedSize(variant)}
                >
                  {variant}
                </span>
              ))}
              <button className={classes.addToCart} onClick={handleCartClick}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
