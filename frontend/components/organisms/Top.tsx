"use client";
import React from "react";

// scss
import styles from "./styles/Top.module.scss";

// lib
import { TypeAnimation } from "react-type-animation";

// components

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.leftBox}></div>
      <div className={styles.rightBox}>
        <TypeAnimation
          sequence={[
            "Hello", // Types 'One'
            2000, // Waits 1s
            "Welcome to kohta's Engineer PortfolioSite", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "Have a great day!", // Types 'Three' without deleting 'Two'
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "1em",
            display: "inline-block",
            color: "rgb(0, 255, 0)",
            fontFamily: "IBM Plex Mono, monospace",
            fontWeight: 400,
            fontStyle: "normal",
          }}
        />
      </div>
    </div>
  );
};

export default Top;
