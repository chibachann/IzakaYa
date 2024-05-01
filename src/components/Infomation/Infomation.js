// Infomation.js
import * as React from 'react';
import * as styles from './Infomation.module.css';

const Infomation = ({ shopName, address, accessInfo, openingHours, holiday, seatsCount, privateRoom, parking, creditCards, eMoney }) => {
 return (
   <section className={styles.shopInfo}>
    <h2 className={styles.shopInfoTitle}>~ Shop Info ~</h2>
     <div className={styles.infoContainer} >
       <div className={styles.leftColumn}>
         <p className={styles.infoItem}>店名: <span>{shopName}</span></p>
         <hr />
         <p className={styles.infoItem}>住所: <span>{address}</span></p>
         <hr />
         <p className={styles.infoItem}>アクセス: <span>{accessInfo}</span></p>
         <hr />
         <p className={styles.infoItem}>営業時間: <span>{openingHours}</span></p>
         <hr />
         <p className={styles.infoItem}>定休日: <span>{holiday}</span></p>
         <hr />
         <p className={styles.infoItem}>総席数: <span>{seatsCount}席</span></p>
       </div>
       <div className={styles.rightColumn}>
         <p className={styles.infoItem}>貸切: <span>{privateRoom}</span></p>
         <hr />
         <p className={styles.infoItem}>駐車場: <span>{parking}</span></p>
         <hr />
         <p className={styles.infoItem}>クレジットカード: <span>{creditCards}</span></p>
         <hr />
         <p className={styles.infoItem}>電子マネー: <span>{eMoney}</span></p>
       </div>
     </div>
   </section>
 );
};

export default Infomation;
