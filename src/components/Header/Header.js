import ShoppingBagIcon from "../../assets/icons/shopping-bag";
import styles from "../../styles/components/Header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.logo}>The Furnish</p>
        <ul>
          <li>
            <a className={styles.inactive} href="/">
              Shop
            </a>
          </li>
          <li>
            <a href="/" className={styles.bold}>
              Collection
            </a>
          </li>
          <li>
            <a href="/">
              <ShoppingBagIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
