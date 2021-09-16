import { useState } from "react";
import { Grid } from "@material-ui/core";
import styles from "../../styles/components/Products Grid/ProductsItem.module.css";

const ProductsItem = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const product = props.product;
  const imageName = product.name + ".png";
  const image = "./assets/images/" + imageName;

  const appliedStyles = {
    backgroundColor: product.bgColor,
  };

  window.addEventListener("resize", () => {
    setWindowWidth((prev) => window.innerWidth);
  });

  return (
    <Grid item xs={windowWidth > 600 ? product.width * 4 : 6} key={product.id}>
      <div className={styles.container} style={appliedStyles}>
        <div className={styles.name}>{product.name}</div>
        <div>
          <img alt={product.name + " image"} src={image}></img>
        </div>
        <a className={styles.info} href="/">
          More Info -{">"}
        </a>
      </div>
    </Grid>
  );
};

export default ProductsItem;
