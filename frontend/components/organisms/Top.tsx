"use client";
import React from "react";

// scss
import styles from "./styles/Top.module.scss";

// type
import { TypeAnimation } from "react-type-animation";

// spline
import Spline from "@splinetool/react-spline";

// components

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.leftBox}>
        <Spline scene="https://prod.spline.design/7I2ng5jCiUGfTDl3/scene.splinecode" />
      </div>
      <div className={styles.rightBox}>
        <div className={styles.center}>
          <pre>
            <TypeAnimation
              sequence={[
                "Thanks for stopping by!\n",
                2000,
                "Thanks for stopping by!\nHere, you can check out all the cool stuff\n", // Deletes 'One' and types 'Two'
                "Thanks for stopping by!\nHere, you can check out all the cool stuff\nI'm up to as an engineer, \n", // Deletes 'One' and types 'Two'
                "Thanks for stopping by!\nHere, you can check out all the cool stuff\nI'm up to as an engineer, \nlike my DJ gigs and freelance gigs.\n", // Deletes 'One' and types 'Two'
                2000,
                "Thanks for stopping by!\nHere, you can check out all the cool stuff\nI'm up to as an engineer, \nlike my DJ gigs and freelance gigs.\nTake your time and have a look around!",
                2000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 30 }}
              wrapper="span"
              cursor={true}
              repeat={0}
              style={{ display: "inline-block" }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Top;
