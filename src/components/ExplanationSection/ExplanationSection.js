// ExplanationSection.js
import * as React from 'react';
import * as styles from './ExplanationSection.module.css';

const ExplanationSection = () => {
 return (
   <section className={styles.section}>
     <div className={styles.content}>
       <div className={styles.title}>
         <h1>Webの可能性を最大限に引き出し、ビジョンを現実に</h1>
       </div>
       <div className={styles.explain}>
         当店では、イタリアの太陽と大地の恵みを受けた季節の食材を使い、情熱と創造性を込めて伝統的なイタリア料理をお届けいたします。
         <br />オーナーシェフが自ら厳選した新鮮な食材を活かし、イタリアの各地方に伝わる郷土料理をアレンジした逸品の数々。
         <br />まるでイタリアの小さな村にいるような、温かみのある店内で、
         <br />大切な人との語らいとともにお楽しみください。
         <br />イタリアの情熱と魂を込めたおもてなしで、皆様のご来店を心よりお待ちしております。
       </div>
     </div>
   </section>
 );
};

export default ExplanationSection;
