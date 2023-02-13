import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

import greeksalad from "../images/greek salad.jpg";

import Card from "./UI/Card";
import styles from "./FoodItem.module.css";

const FoodItem = () => {
  return (
    <Card>
      <img className={styles.img} src={greeksalad} alt="greek salad" />
      <div className={styles.details}>
        <div className={styles.flex}>
          <h3 className={styles.foodtitle}>Greek Salad</h3>
          <h3 className={styles.price}> $ 12.99</h3>
        </div>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button className={styles.order_btn}>
          Order a delivery &nbsp;&nbsp;&nbsp;
          <span>
            <FontAwesomeIcon icon={faMotorcycle} />
          </span>
        </button>
      </div>
    </Card>
  );
};

export default FoodItem;
