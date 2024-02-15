import React from "react";

interface ModalProps {
  children: React.ReactNode;
}
const CustomModal = (props: ModalProps) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-box">
        {props.children}
      </div>
    </div>
  );
}

export default CustomModal
