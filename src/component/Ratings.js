import RatingCards from "./RatingCard";
import styles from "./Ratings.module.css";

const Ratings = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.align}>
          <h2 className={styles.center}>Testimonials</h2>
          <div className={styles.cardflex}>
            <RatingCards className={styles.card} />
            <RatingCards className={styles.card} />
            <RatingCards className={styles.card} />
            <RatingCards className={styles.card} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ratings;
