import * as React from 'react';
import * as styles from './header.module.css';

const navigationItems = [
  { id: 'top', label: 'TOP' },
  { id: 'about', label: 'ABOUT' },
  { id: 'food', label: 'FOOD' },
  { id: 'drink', label: 'DRINK' },
  { id: 'scene', label: 'SCENE' },
];

const Header = () => {
  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoText}>IzakaYa</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                onClick={(event) => handleClick(event, item.id)}
                className={styles.navLink}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
