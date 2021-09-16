import { useParams } from "react-router";
import Products from "../assets/dummy data/Products";
import styles from "../styles/pages/ProductDetailPage.module.css";
import { FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = Products[id - 1];
  const imageName = product.name + ".png";
  const image = "./assets/images/" + imageName;
  const style = { background: product.bgColor };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left} style={style}>
          <p className={styles.path}>{product.path}</p>
          <div>
            <img alt={product.name + " image"} src={image}></img>
          </div>
          <div className={styles["product-container"]}>
            <div className={styles.product}>
              <p className={styles.type}>{product.type}</p>
              <h1>{product.name}</h1>
              <p>{product.price}</p>
            </div>
            <button>Buy</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.intro}>
            <p className={styles.label}>Intro</p>
            <p className={styles["intro-text"]}>{product.intro}</p>
          </div>
          <div className={styles["product-information"]}>
            <p className={styles.label}>Product Information</p>
            <div className={styles.dimensions}>
              <p className={styles.labelBold}>Dimensions</p>
              <p>{product.dimensions}</p>
            </div>
            <hr />
            <div className={styles.materials}>
              <p className={styles.labelBold}>Materials</p>
              <p>{product.materials.join(",\r\n")}</p>
            </div>
            <hr />
            <div className={styles["good-to-know"]}>
              <p className={styles.labelBold}>Good to know</p>
              <p>{product.goodToKnow}</p>
            </div>
            <hr />
            <div className={styles["look-book"]}>
              <p>
                Our
                <br />
                Lookbook
              </p>
            </div>
          </div>
        </div>
        <div className={styles.social}>
          <FaFacebookSquare />
          <FaTwitter className={styles.twitter} />
          <FaPinterest />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
