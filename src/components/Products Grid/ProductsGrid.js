import styles from "../../styles/components/Products Grid/ProductsGrid.module.css";
import Products from "../../assets/dummy data/Products";
import ProductsItem from "./ProductsItem";
import Grid from "@material-ui/core/Grid";

const ProductsGrid = () => {
  console.log(Products);
  return (
    <div className={styles["grid-container"]}>
      <Grid container spacing={1}>
        {Products.map((product) => {
          return <ProductsItem product={product} />;
        })}
      </Grid>
    </div>
  );
};

export default ProductsGrid;
