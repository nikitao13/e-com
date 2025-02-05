import classes from "./ProductItem.module.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const ProductItem = ({ item, onClick }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className={classes.item}>
      <div>
        <img src={item.imageUrl} alt={item.name} className={classes.image} onClick={onClick}/>
      </div>
      <div className={classes.details}>
        <h3>{item.name}</h3>
        <p>x{item.qty}</p>
        <p className={classes.itemSize}>{item.size}</p>
        <button className={classes.remove} onClick={() => removeFromCart(item)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
