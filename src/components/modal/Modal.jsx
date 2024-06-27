import { forwardRef } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../button/Button";

const Modal = forwardRef(function Modal({ email }, ref) {
  return (
    <dialog ref={ref}>
      <h2>Du er nu tilmeldt nyhedsbrevet med emailen: {email}</h2>
      <form method="dialog">
        <Button title={<IoMdClose />} />
      </form>
    </dialog>
  );
});

export default Modal;
