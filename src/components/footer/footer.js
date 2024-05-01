// Footer.js
import * as React from 'react';
import * as styles from './footer.module.css';

const Footer = () => {
 return (
   <footer className={styles.footer}>
     <div className={styles.footerContent}>
       <p>&copy; {new Date().getFullYear()} IzakaYa</p>
     </div>
   </footer>
 );
};

export default Footer;
