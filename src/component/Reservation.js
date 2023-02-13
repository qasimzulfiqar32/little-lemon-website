import styles from "./Reservation.module.css";
import foodimg from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <h1 className={styles.title}>Little Lemon</h1>
            <h2 className={styles.subtitle}>Chicago</h2>
            <p className={styles.desc}>
              Join us at for a dining experience you won't forget! Enjoy our
              delicious menu and cozy atmosphere while reserving your table
              today.
            </p>
            <br />
            <Link to="/bookingpage">
              <button aria-label="Go to booking page" className={styles.button}>
                <h3>Reserve a Table</h3>
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <img className={styles.img} src={foodimg} alt="foodImage"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
