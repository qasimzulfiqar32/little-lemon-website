import { useState } from "react";
import styles from "./BookingForm.module.css";
import BookingHeading from "./BookingHeading";

const BookingForm = ({ availableTimes, dispatch, onSubmit }) => {
  const defaultTime =
    availableTimes && availableTimes.length > 0 ? availableTimes[0] : "";
  const defaultDate = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState(defaultTime);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setErrors] = useState({});

  const validateDate = () => {
    const newErrors = { ...errors };
    if (new Date(date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)) {
      newErrors.date = "Date cannot be in the past";
    } else {
      delete newErrors.date;
    }
    setErrors(newErrors);
  };

  const validateGuests = () => {
    const newErrors = { ...errors };
    if (!guests || guests < 1 || guests > 10) {
      newErrors.guests = "Number of guests must be between 1 and 10";
    } else {
      delete newErrors.guests;
    }
    setErrors(newErrors);
  };

  const submitHnadler = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      onSubmit({ date, time, guests, occasion });
    }
  };

  return (
    <>
      <BookingHeading />
      <div className={styles.section}>
        <form onSubmit={submitHnadler} className={styles.form_container}>
          <label className={styles.col_25} htmlFor="res-date">
            Choose date:{" "}
          </label>
          <input
            className={styles.col_75}
            type="date"
            id="res-date"
            value={date}
            data-testid="res-date"
            onChange={(e) => {
              setDate(e.target.value);
              dispatch({ type: "update", date: e.target.value });
            }}
            onBlur={validateDate}
          />
          {errors.date && (
            <div
              style={{
                color: "red",
                float: "right",
                width: "60%",
                paddingLeft: "40%",
              }}
            >
              {errors.date}
            </div>
          )}

          <label className={styles.col_25} htmlFor="res-time">
            Choose time:
          </label>
          <select
            className={styles.col_75}
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            data-testid="available-times"
          >
            {availableTimes &&
              availableTimes.map((time, index) => (
                <option key={index}>{time}</option>
              ))}
          </select>

          <label className={styles.col_25} htmlFor="guests">
            Number of guests:
          </label>
          <input
            className={styles.col_75}
            type="number"
            placeholder="eg. 2"
            min="1"
            max="10"
            id="guests"
            data-testid="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            onBlur={validateGuests}
          />
          {errors.guests && (
            <div
              style={{
                color: "red",
                float: "right",
                width: "60%",
                paddingLeft: "40%",
              }}
            >
              {errors.guests}
            </div>
          )}

          <label className={styles.col_25} htmlFor="occasion">
            Occasion:
          </label>
          <select
            className={styles.col_75}
            id="occasion"
            value={occasion}
            data-testid="occasion"
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>

          <button
            aria-label="Submit Form"
            disabled={Object.keys(errors).length > 0}
            type="submit"
          >
            Make Your reservation
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
