import BookingForm from "../component/BookingForm";
import { useReducer, useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "../component/fetch_api";
import { useNavigate } from "react-router-dom";

export const initializeTimes = () => {
  const today = new Date();

  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "update") {
    // logic to update available times based on date
    let selectedDate = action.date;
    if (!(selectedDate instanceof Date)) {
      selectedDate = new Date(selectedDate);
    }
    if (!selectedDate) {
      console.error("Error: Invalid date object passed to fetchAPI");
      return state;
    }
    return fetchAPI(selectedDate);
  }
  return state;
};

const BookingPage = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const submitForm = (data) => {
    const result = submitAPI(data);
    if (result) {
      setFormData(data);
      navigate("/booking-confirmed", { state: { formData: data } });
      console.log("Form Submitted");
    } else {
      console.log("Form Submission Failed");
    }
    console.log(formData);
  };

  const initialState = initializeTimes();
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  useEffect(() => {
    const today = new Date();
    dispatch({ type: "update", date: today });
  }, []);

  return (
    <BookingForm
      onSubmit={submitForm}
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );
};

export default BookingPage;
