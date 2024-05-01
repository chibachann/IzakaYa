// RFeaturedDish.js
import * as React from 'react';
import * as styles from './RFeaturedDish.module.css';

const RFeaturedDish = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>~ Il Nostro Piatto di Pasta ~</h2>
        <p className={styles.description}>
          当店のパスタは、イタリア各地から取り寄せた厳選された食材を使用し、ひとつひとつ手作りで提供しています。
          パスタ生地は、最高級のデュラム小麦粉を使用し、プロの職人が丁寧に仕上げています。
          ソースは、シェフが厳選した新鮮な野菜や肉、魚介類を使用し、伝統的なイタリアンレシピで調理しています。
          ペペロンチーノ、カルボナーラ、ボロネーゼなど、様々な種類のパスタをご用意しております。
          お好みのパスタを選んでいただき、イタリアの味をお楽しみください。
          ワインとの相性も抜群です。ぜひ、当店自慢のパスタをご賞味ください。
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/pasta.jpg" alt="パスタの写真" />
      </div>
    </section>
  );
};

export default RFeaturedDish;
