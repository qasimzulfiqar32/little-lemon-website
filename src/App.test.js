import { fireEvent, render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./pages/BookingPage";

// import App from "./App";

import BookingForm from "./component/BookingForm";

test("Renders the Make Your reservation", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

describe("initializeTimes", () => {
  it("should return a non-empty array", () => {
    const result = initializeTimes();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });
});
test("updateTimes should return updated times based on selected date", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const selectedDate = new Date("2022-06-01");
  const action = { type: "update", date: selectedDate };
  const result = updateTimes(state, action);
  expect(result).not.toEqual(state);
});

test("submits the form correctly", () => {
  const onSubmit = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const dispatch = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      onSubmit={onSubmit}
    />
  );

  const resDate = screen.getByLabelText(/Choose date/);
  fireEvent.change(resDate, {
    target: { value: "2022-05-15" },
  });
  const resTime = screen.getByLabelText(/Choose time/);
  fireEvent.change(resTime, {
    target: { value: "17:00" },
  });
  const noGuests = screen.getByLabelText(/Number of guests/);
  fireEvent.change(noGuests, {
    target: { value: 5 },
  });
  const occasion = screen.getByLabelText(/Occasion/);
  fireEvent.change(occasion, {
    target: { value: "Anniversary" },
  });
  // simulate form submission
  const submitButton = screen.getByText("Make Your reservation");
  fireEvent.click(submitButton);
  // assert that the form was submitted with the correct data
  expect(onSubmit).toHaveBeenCalledWith({
    date: "2022-05-15",
    time: "17:00",
    guests: "5",
    occasion: "Anniversary",
  });
});

//--------------------FORM-----------------------------------------------------------------------------------
it("renders a date input", () => {
  render(<BookingForm />);
  const dateInput = screen.getByTestId("res-date");

  expect(dateInput).toBeInTheDocument();
  expect(dateInput.type).toBe("date");
  expect(dateInput.value).toBe(new Date().toISOString().split("T")[0]);
});

it("displays error message for date in the past", () => {
  const dispatch = jest.fn();
  render(<BookingForm dispatch={dispatch} />);

  const dateInput = screen.getByTestId("res-date");

  fireEvent.change(dateInput, { target: { value: "2000-01-01" } });
  fireEvent.blur(dateInput);

  const errorMessage = screen.getByText("Date cannot be in the past");
  expect(errorMessage).toBeInTheDocument();
});

it("renders a time select", () => {
  const availableTimes = ["12:00", "13:00", "14:00"];
  render(<BookingForm availableTimes={availableTimes} />);
  const timeSelect = screen.getByTestId("available-times");

  expect(timeSelect).toBeInTheDocument();
  expect(timeSelect.options).toHaveLength(3);
  expect(timeSelect.options[0].value).toBe("12:00");
});

it("renders a guests input", () => {
  render(<BookingForm />);
  const guestsInput = screen.getByTestId("guests");

  expect(guestsInput).toBeInTheDocument();
  expect(guestsInput.type).toBe("number");
  expect(guestsInput.value).toBe("1");
});

it("displays error message for guests outside range", () => {
  render(<BookingForm />);
  const guestsInput = screen.getByTestId("guests");

  fireEvent.change(guestsInput, { target: { value: "0" } });
  fireEvent.blur(guestsInput);

  const errorMessage = screen.getByText(
    "Number of guests must be between 1 and 10"
  );
  expect(errorMessage).toBeInTheDocument();
});

it("renders an occasion select", () => {
  render(<BookingForm />);
  const occasionSelect = screen.getByTestId("occasion");

  expect(occasionSelect).toBeInTheDocument();
  expect(occasionSelect.options).toHaveLength(2);
  expect(occasionSelect.options[0].value).toBe("Birthday");
});

//-------------------------------------Submission--------------------------------------------------------
describe("BookingForm", () => {
  it("should submit the form with the correct data and dispatch an action", () => {
    const dispatch = jest.fn();
    const onSubmit = jest.fn();
    const availableTimes = ["12:00 PM", "1:00 PM"];

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={onSubmit}
      />
    );

    fireEvent.change(screen.getByTestId("res-date"), {
      target: { value: "2023-03-03" },
    });
    fireEvent.change(screen.getByTestId("available-times"), {
      target: { value: "12:00 PM" },
    });
    fireEvent.change(screen.getByTestId("guests"), { target: { value: "2" } });
    fireEvent.change(screen.getByTestId("occasion"), {
      target: { value: "Anniversary" },
    });

    fireEvent.click(screen.getByText("Make Your reservation"));

    expect(onSubmit).toHaveBeenCalledWith({
      date: "2023-03-03",
      time: "12:00 PM",
      guests: "2",
      occasion: "Anniversary",
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "update",
      date: "2023-03-03",
    });
  });
});
