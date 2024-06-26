import styles from "./sectionheader.module.css";

const SectionHeader = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

export default SectionHeader;
