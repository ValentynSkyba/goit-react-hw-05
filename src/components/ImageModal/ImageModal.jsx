import Modal from "react-modal";
import s from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#0E385E",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function imageModal({ closeModal, modalIsOpen, imgUrl }) {
  return (
    <Modal
      overlayClassName={s.overlay}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={s.modal}>
        <img className={s.img} src={imgUrl} alt="imgUrl.alt" />
        <button className={s.btn} onClick={closeModal}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default imageModal;
