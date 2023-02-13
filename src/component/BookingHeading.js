import styles from "./BookingForm.module.css";

const BookingHeading = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.textalign}>
        <h2 className={styles.heading}>Find your table for any occasion</h2>
        <p className={styles.desc}>
          Reserve a table at our restaurant for a memorable dining experience.
          Enjoy great views and atmosphere. Book your table now via phone or
          website.Savor our delicious cuisine crafted by our expert chefs using
          only the freshest ingredients. Indulge in a dining experience like no
          other and create lasting memories with your loved ones.
        </p>
      </div>
    </div>
  );
};

export default BookingHeading;
