import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.listItem}>čo riešime</li>
        <li className={styles.listItem}>pre koho</li>
        <li className={styles.listItem}>ako to robíme</li>
        <li className={styles.listItem}>kedy</li>
      </ul>
    </div>
  );
};

export default Menu;
