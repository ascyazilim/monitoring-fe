import React from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, closeModal, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Detay"
    >
      {content}
    </Modal>
  );
};

export default CustomModal;
