"use client";
import React, { useEffect } from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/SubPageInsertImage.module.scss";

// aos imports
import AOS from "aos";
import "aos/dist/aos.css";

// props
export type SubPageInsertImageProps = {
  id: number;
  image: string;
  alt: string;
};

const SubPageInsertImage = ({ id, image, alt }: SubPageInsertImageProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div key={id} className={styles.imageBox} data-aos="fade-up">
      <Image
        className={styles.image}
        src={image}
        width={500}
        height={500}
        alt={alt}
      />
    </div>
  );
};

export default SubPageInsertImage;
