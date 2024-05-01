import * as React from 'react'
import * as styles from './FeaturedMessage.module.css'

const FeaturedMessage = () => {
  return (
    <section className={styles.featuredMessage}>
      <div className={styles.imageWrapper}>
        <img src="/images/top.jpg" alt="和食の画像" />
      </div>
      <div className={styles.messageWrapper}>
        <h2 className={styles.heading}>旬の味覚と心温まるおもてなし</h2>
        <p className={styles.description}>
          季節の食材を活かした逸品料理と、心尽くしのサービスでお迎えいたします。伝統の味と現代のエッセンスが融合した当店自慢の料理の数々を、ゆったりとした空間でお楽しみください。
        </p>
        <p className={styles.catchphrase}>
          「美味しいを、もっと身近に。」
        </p>
      </div>
    </section>
  )
}

export default FeaturedMessage
