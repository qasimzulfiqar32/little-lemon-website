import FoodItem from "./FoodItem";
import styles from "./Specials.module.css";

const Specials = () => {
  return (
    <>
      <section className={styles.section}>
        <div>
          <div className={styles.flex}>
            <h1>This Weeks Specials!</h1>
            <button className={styles.button}>Online Menu</button>
          </div>
          <div className={styles.cardflex}>
            <FoodItem />
            <FoodItem />
            <FoodItem />
          </div>
        </div>
      </section>
    </>
  );
};

export default Specials;
