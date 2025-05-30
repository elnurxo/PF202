import styles from "./index.module.css";

const Title = () => {
  return (
    <h1 className={`${styles.big} ${styles.primary} text-center`}>
      Test Heading
    </h1>
  );
};

export default Title;
