import { Link } from "react-router-dom";

const NavLinks = () => {
  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link aria-label="Go to home page" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to About page"
            to="/"
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to menu page"
            to="/"
            onClick={() => handleLinkClick("menu")}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link aria-label="Go to booking page" to="/bookingpage">
            Reservation
          </Link>
        </li>
        <li>
          <Link aria-label="Go to order page" to="/">
            Order Online
          </Link>
        </li>
        <li>
          <Link aria-label="Go to login page" to="/">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
