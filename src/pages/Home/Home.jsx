import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SaleCarousel from "../../components/Carousel/SaleCarousel.jsx";
import Products from "../../components/Products/Products.jsx";
import classes from "./Home.module.scss";
import CartModal from "../../components/CartModal/CartModal.jsx";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  const handleCartClick = (product) => {
    if (!selectedProduct || selectedProduct.name !== product.name) {
      return;
    }

    setIsModalVisible(true);

    addToCart(selectedProduct);

    setTimeout(() => {
      setIsModalVisible(false);
      setSelectedProduct(null);
    }, 1500);
  };

  return (
    <div className={classes.home}>
      <CartModal
        item={selectedProduct}
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
      <Header />
      <main className={classes.main}>
        <SaleCarousel />
        <Products
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          handleCartClick={handleCartClick}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
