import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link aria-label="Go to home page" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </header>
    </>
  );
};

export default Header;
