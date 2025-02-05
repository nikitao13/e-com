import classes from "./Header.module.scss";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  const handleCartClick = () => {
    console.log("Current Cart Items:", cartItems);
  };

  return (
    <header className={classes.header}>
      <div className={classes.menu}>
        <Link to="/">
          <FaHome />
        </Link>
      </div>
      <div className={classes.title}>
        <h1>
          <em>just t-shirts.</em>
        </h1>
      </div>
      <div className={classes.cart}>
        <Link to="/cart">
          <FaShoppingCart
            onClick={handleCartClick}
            className={cartItems.length > 0 ? classes.notEmpty : ""}
          />{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
