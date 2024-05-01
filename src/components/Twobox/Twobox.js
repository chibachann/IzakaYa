import * as React from 'react';
import * as styles from './Twobox.module.css';

const TwoBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.imageContainer}>
          <img src="orange_obj.jpg" alt="Website production" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h2>Webサイト制作</h2>
          <p>プロジェクトを成功に導くための、<br />企画・設計・運用はお任せください</p>
          
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.imageContainer}>
          <img src="orange_obj.jpg" alt="Marketing" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h2>Webマーケティング</h2>
          <p>Webサイトを作ってからが本当の始まり。<br />サイトを育てるマーケティングをご提案</p>
          
        </div>
      </div>
    </div>
  );
};

export default TwoBox;
