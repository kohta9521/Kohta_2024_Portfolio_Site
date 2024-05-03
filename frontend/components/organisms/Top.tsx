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
            "npm i kohta-engineer-portfolio-site\n", // Types 'One'
            4000, // Waits 1s
            "npm WARN EBADENGINE Unsupported engine {\nnpm WARN EBADENGINE   package: 'polished@4.3.0',\nnpm WARN EBADENGINE   required: { node: '>=20' },\n  npm WARN EBADENGINE   current: { node: 'v18.18.1',\n  npm: '9.8.1' }npm WARN EBADENGINE }\n", // Deletes 'One' and types 'Two'
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
            whiteSpace: 'pre-line',
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
