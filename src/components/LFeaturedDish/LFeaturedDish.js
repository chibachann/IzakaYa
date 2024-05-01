// LFeaturedDish.js
import * as React from 'react';
import * as styles from './LFeaturedDish.module.css';

const LFeaturedDish = () => {
 return (
   <section className={styles.section}>
     <div className={styles.imageContainer}>
       <img src="/images/pizza.jpg" alt="ピザの写真" />
     </div>
     <div className={styles.content}>
      <h2 className={styles.title}>~ La Nostra Pizza Speciale ~</h2>
       <p className={styles.description}>
         当店のピザは、イタリアから取り寄せた最高級の小麦粉と新鮮な具材を使用し、薪窯で焼き上げています。モチモチの生地と香ばしい風味が特徴です。
         トマトソースは、イタリア産の完熟トマトを使用し、シェフが秘伝のレシピで仕上げています。
         チーズは、イタリア各地から厳選したものを使用し、ピザの味を引き立てています。
         お好みのトッピングを選んでいただき、自分だけのオリジナルピザをお楽しみください。
         ワインとの相性も抜群です。ぜひ、当店自慢のピザをご賞味ください。
       </p>
     </div>
   </section>
 );
};



export default LFeaturedDish;
