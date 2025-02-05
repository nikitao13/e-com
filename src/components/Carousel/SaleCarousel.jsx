import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext.jsx";
import classes from "./SaleCarousel.module.scss";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const SaleCarousel = () => {
  const { products } = useContext(ProductsContext);
  const navigate = useNavigate();
  const saleProducts = products.filter((product) => product.featured === true);

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Sale Items</h1>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          arrows={true}
        >
          {saleProducts.map((product) => (
            <div key={product.id} className={classes.card}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className={classes.image}
                onClick={() => handleProductClick(product)}
              />
            </div>
          ))}
        </Carousel>
    </div>
  );
};

export default SaleCarousel;
