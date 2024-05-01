// HalfBlockLeft.js
import * as React from 'react';
import * as styles from './HalfBlockLeft.module.css';

const HalfBlockLeft = ({ image, alt, title, description, backgroundColor, textColor, titleFont, descriptionFont }) => {
  return (
    <section className={styles.section}>
      <div className={styles.leftContent} style={{ backgroundColor }}>
        <div className={styles.textContainer}>
          <h2 className={styles.title} style={{ color: textColor, fontFamily: titleFont }}>{title}</h2>
          <p
            className={styles.description}
            style={{ color: textColor, fontFamily: descriptionFont }}
            dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }}
          ></p>
        </div>
      </div>
      <div className={styles.rightContent}>
        <img src={image} alt={alt} className={styles.image} />
      </div>
    </section>
  );
};

export default HalfBlockLeft;
