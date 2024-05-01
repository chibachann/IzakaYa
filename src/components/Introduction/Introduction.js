import * as React from 'react';
import * as styles from './Introduction.module.css';

const Introduction = ({ title, backgroundImage, description }) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section className={styles.section} style={sectionStyle}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </section>
  );
};

export default Introduction;
