import styles from "./Ratings.module.css";
import Card from "./UI/Card";
import img from "../images/Mario and Adrian A.jpg";

const RatingCards = () => {
  return (
    <>
      <Card className={styles.card_size}>
        <div className={styles.card_margin}>
          <h4 className={styles.title}>Rating</h4>
          <div className={styles.name_flex}>
            <img className={styles.image} src={img} alt="img" />
            &nbsp;&nbsp;&nbsp;
            <h4 className={styles.name}>Name</h4>
          </div>
          <h4 className={styles.review}>Review Text Text Text Text</h4>
        </div>
      </Card>
    </>
  );
};

export default RatingCards;
