import Reservation from "./Reservation";
import Specials from "./Specials";
import Ratings from "./Ratings";
import About from "./About";

const Header = () => {
  return (
    <>
      <main>
        <Reservation />
        <Specials />
        <Ratings />
        <About />
      </main>
    </>
  );
};

export default Header;
