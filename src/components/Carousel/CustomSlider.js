import styles from "../../styles/components/Carousel/CustomSlider.module.css";

const CustomSlider = (props) => {
  const product = props.product;
  const imageName = product.name + ".png";
  const image = "./assets/images/" + imageName;
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: product.bgColor }}
    >
      <div>
        <img alt={product.name + " image"} src={image}></img>
      </div>
      <div className={styles.info}>
        <p className={styles.type}>{product.type}</p>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default CustomSlider;
