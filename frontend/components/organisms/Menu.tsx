import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/Menu.module.scss";

// components
import MenuLink from "../molecules/MenuLink";

// icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiWantedly } from "react-icons/si";

interface MenuProps {
  isOpen: boolean;
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <h2 className={styles.menuTitle}>Page Menu</h2>
          <MenuLink id={0} link="/" title="Home" size="large" />
          <MenuLink id={1} link="/about" title="About" size="large" />
          <MenuLink id={2} link="/services" title="Services" size="large" />
          <MenuLink id={3} link="/works" title="Works" size="large" />
          <MenuLink id={4} link="/news" title="News" size="large" />
          <MenuLink
            id={5}
            link="https://www.kohta-tech-blog.com/"
            title="Blog"
            size="large"
          />
          <MenuLink id={6} link="/contact" title="Contact" size="large" />
        </div>
        <div className={styles.rightBox}>
          <Link href="https://github.com/kohta9521" className={styles.link}>
            <FaGithub className={styles.icon} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/%E5%85%89%E5%A4%AA-%E6%B2%B3%E5%86%85-89476b2a2/?originalSubdomain=jp"
            className={styles.link}
          >
            <FaLinkedin className={styles.icon} />
          </Link>
          <Link href="https://x.com/kohta_piano" className={styles.link}>
            <FaSquareXTwitter className={styles.icon} />
          </Link>
          <Link
            href="https://www.wantedly.com/id/kouta_kochi_f"
            className={styles.link}
          >
            <SiWantedly className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
