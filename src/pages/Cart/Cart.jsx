import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductItem from "../../components/ProductItem/ProductItem";
import classes from "./Cart.module.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`);
  };

  const renderCart = () => {
    if (!cartItems || cartItems.length === 0) {
      return (
        <div>
          <h1>Your cart</h1>
          <p>Your cart is empty.</p>
        </div>
      );
    }

    return cartItems.map((item, index) => (
      <ProductItem
        key={index}
        item={item}
        onClick={() => handleProductClick(item)}
      />
    ));
  };

  return (
    <div className={classes.cart}>
      <Header />
      <main className={classes.main}>
        <div className={classes.cartItems}>{renderCart()}</div>
        <div className={classes.checkout}>
          <h3 className={classes.underline}>Checkout</h3>
          {cartItems.map((item, index) => (
            <div key={index} className={classes.item}>
              <p>
                {item.name} x{item.qty}
              </p>
              <p className={classes.itemSize}>size: {item.size}</p>
              <p>price: ${item.price * item.qty}</p>
            </div>
          ))}
          <p>order quantity: {totalQuantity}</p>
          <p className={classes.total}>total: ${totalPrice}</p>
          <button className={classes.checkoutButton}>Checkout</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
