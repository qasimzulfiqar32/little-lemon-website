import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import BookingConfirmation from "./pages/BookingConfirmation";
import Layout from "./component/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/booking-confirmed" element={<BookingConfirmation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
