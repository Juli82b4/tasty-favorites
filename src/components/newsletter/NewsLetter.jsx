import { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./newsletter.module.css"; // Ensure the path is correct

const NewsLetter = () => {
  const [inputValue, setInputValue] = useState("");
  const dialog = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dialog.current.showModal();
  };

  return (
    <section className={styles.newsletter}>
      <Modal ref={dialog} email={inputValue} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email" className={styles.label}>Din email:</label>
        <input
          id="email"
          ref={inputRef}
          type="email"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </section>
  );
};

export default NewsLetter;
