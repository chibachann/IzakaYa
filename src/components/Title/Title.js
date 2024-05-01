import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './Title.module.css';

const Title = ({ title_p, title_h1, explain_p, explain_link, explain_link_text }) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>{title_p}</p>
          <h1>{title_h1}</h1>
        </div>
        <div className={styles.explain}>
          <p>{explain_p}</p>
          {explain_link && (
            <Link to={explain_link} className={styles.button}>
              {explain_link_text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Title;
