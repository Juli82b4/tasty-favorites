import { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../button/Button";

const NewsLetter = () => {
  const [inputValue, setInputValue] = useState("");
  const dialog = useRef();
  const inputRef = useRef();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dialog.current.showModal();
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <section>
      <Modal ref={dialog} email={inputValue} />
      <form onSubmit={handleSubmit}>
        <label>Din email:</label>
        <input
          ref={inputRef}
          type="email"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type="submit" title="Tilmeld" />
      </form>

      <button></button>
    </section>
  );
};

export default NewsLetter;
