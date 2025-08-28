import { useState } from "react";
const useModal = (initState: false) => {
  const [showModal, setShowModal] = useState<boolean>(initState);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return {
    showModal,
    openModal,
    closeModal,
  };
};

export default useModal;
