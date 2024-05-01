// CenterContents.js
import * as React from 'react';
import * as styles from './CenterContents.module.css';

const CenterContents = ({ id, title, image, alt, description, backgroundImage }) => {
  return (
    <section id={id} className={styles.section} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.imageContainer}>
          <div className={styles.line}></div>
          <img src={image} alt={alt} className={styles.image} />
        </div>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }}></p>
      </div>
    </section>
  );
};

export default CenterContents;
