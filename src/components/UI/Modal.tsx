import React, { useRef, forwardRef, useImperativeHandle } from 'react';

interface ModalProps {
  children: React.ReactNode;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal =
  // eslint-disable-next-line react/display-name
  forwardRef<ModalRef, ModalProps>((props, ref) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      if (modalRef.current) {
        modalRef.current.style.display = 'block';
      }
    },
    close: () => {
      if (modalRef.current) {
        modalRef.current.style.display = 'none';
      }
    }
  }));


    return (
    <div ref={modalRef} className="modal-wrapper">
      <div className="modal-box">
        {props.children}
      </div>
    </div>
  );
});

export default Modal;
