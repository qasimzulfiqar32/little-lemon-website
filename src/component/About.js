import styles from "./About.module.css";

import chef_1 from "../images/restaurant chef B.jpg";
import chef_2 from "../images/Mario and Adrian A.jpg";

const About = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.divide_flex}>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className={styles.description}>
              Little Lemon is a beloved restaurant in Chicago known for its
              delicious, authentic Mediterranean cuisine. Our menu features a
              wide variety of dishes made with fresh, high-quality ingredients.
              Whether you're in the mood for a hearty entree or a light,
              flavorful appetizer, you're sure to find something you love at
              Little Lemon. Come visit us and experience the taste of the
              Mediterranean!
            </p>
          </div>
          <div className={styles.img_flex}>
            <img
              className={styles.img_1}
              src={chef_1}
              alt="chef preping food"
            />
            <img
              className={styles.img_2}
              src={chef_2}
              alt="chef preping food"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
