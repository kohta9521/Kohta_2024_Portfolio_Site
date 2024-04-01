'use client';
import React, { useState } from 'react';

import Menu from '../organisms/Menu';

import styles from './styles/HamburgerBtn.module.scss';

const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.hamburgerBox}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={isOpen ? styles.open : ''}></span>
          <span className={isOpen ? styles.open : ''}></span>
          <span className={isOpen ? styles.open : ''}></span>
        </button>
        <div className={styles.menu}>
          <p className={styles.text}>Menu</p>
        </div>
      </div>
      <Menu isOpen={isOpen} />
    </>
  );
};

export default HamburgerBtn;
