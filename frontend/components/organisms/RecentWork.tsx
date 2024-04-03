import React from "react";

// scss
import styles from "./styles/RecentWork.module.scss";

// component
import SectionTitle from "../molecules/SectionTitle";
import RecentWorkCard from "../molecules/RecentWorkCard";

const RecentWork = () => {
  return (
    <div className={styles.recent}>
      <div className={styles.container}>
        <SectionTitle key={1} id="#recent" title="Recent My Works" />
        <div className={styles.cardFlexBox}>
          <RecentWorkCard
            key={1}
            id="#card1"
            title="QR Gate System"
            img="/images/gate.jpg"
            link="/works/qr_gate"
            text="Automated email based on information entered from Google Forms and spreadsheets, the email is decorated using MJML and includes a numbered ticket number and QR code that will be needed at the entrance of the event. Automation was performed."
          />
          <RecentWorkCard
            key={2}
            id="#card2"
            title="Freers.co Site"
            img="/images/gate.jpg"
            link="/works/qr_gate"
            text="Automated email based on information entered from Google Forms and spreadsheets, the email is decorated using MJML and includes a numbered ticket number and QR code that will be needed at the entrance of the event. Automation was performed."
          />
          <RecentWorkCard
            key={3}
            id="#card3"
            title="Rezinavi Service"
            img="/images/gate.jpg"
            link="/works/qr_gate"
            text="Automated email based on information entered from Google Forms and spreadsheets, the email is decorated using MJML and includes a numbered ticket number and QR code that will be needed at the entrance of the event. Automation was performed."
          />
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
