import styles from "../../styles/components/Quote/Quote.module.css";

const Quote = () => {
  return (
    <div className={styles.quote}>
      <p>
        <strong>
          <em>Lean</em>
        </strong>{" "}
        too far
      </p>
    </div>
  );
};

export default Quote;
