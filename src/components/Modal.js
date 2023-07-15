

const Modal = ({show, children}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Name - {children.name}</p>
        <p>Age - {children.age}</p>
        <p>RollNo - {children.rollno}</p>
      </section>
    </div>
  );
};

export default Modal;