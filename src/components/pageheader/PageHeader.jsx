import React from 'react';
import styles from './pageheader.module.css';

const PageHeader = ({ title, subTitle, headerImg }) => {
  console.warn(headerImg)
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className={styles.headerContent}>
        <h1 className={styles.heroHeading}>{title}</h1>
        <h2 className={styles.heroSub}>{subTitle}</h2>
      </div>
    </header>
  );
};

export default PageHeader;

