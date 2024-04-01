'uaw client';
import React from 'react';

import styles from './styles/Menu.module.scss';

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.text}>menu</div>
    </div>
  );
};

export default Menu;
