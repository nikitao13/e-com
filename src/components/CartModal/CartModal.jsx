import classes from "./CartModal.module.scss";

const CartModal = ({ item, isVisible }) => {
  return isVisible ? (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <p>{item.name} added to you cart.</p>
      </div>
    </div>
  ) : null;
};

export default CartModal;
