import React from "react";

// scss
import styles from "./styles/About.module.scss";

// component
import SectionTitle from "../molecules/SectionTitle";
import AboutCard from "../atoms/AboutCard";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <SectionTitle
            key={1}
            id="#about"
            title="What is it about this site?"
          />
          <div className={styles.titleTextBox}>
            <p className={styles.titleText}>
              Here I introduce myself, Kochi Kota, as an engineer. In addition
              to being an engineer, I also talk about my club activities at
              university, my daily activities as a DJ, and my activities as an
              event organizer. You can see all of them. Here is what I have been
              doing and what I will be doing in the future. To learn more,
              please click the button below.
            </p>
          </div>
        </div>
        {/* main content */}
        <div className={styles.mainContent}>
          <AboutCard id={1} content="1000+" title="study time" />
          <AboutCard id={1} content="1000+" title="study time" />
          <AboutCard id={1} content="1000+" title="study time" />
          <AboutCard id={1} content="1000+" title="study time" />
        </div>
      </div>
    </div>
  );
};

export default About;
