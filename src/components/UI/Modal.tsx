import React, {useRef, forwardRef, useImperativeHandle, useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {RootReducer} from "../../store/store";

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
    const isOpen = useSelector((state: RootReducer) => state.isModalOpen);
    const [modalState, setModalState] = useState('')


    useImperativeHandle(ref, () => ({
      open: () => {
        if (modalRef.current) {
          if (modalState) {
            modalRef.current.style.display = modalState;
          }
        }
      },
      close: () => {
        if (modalRef.current) {
          if (modalState) {
            modalRef.current.style.display = modalState;
          }
        }
      }
    }));

    useEffect(() => {
      setModalState(isOpen.isModalOpen === true? 'block' : 'none')
    }, [])


    return (
      <div ref={modalRef} className="modal-wrapper">
        <div className="modal-box">
          {props.children}
        </div>
      </div>
    );
  });

export default Modal;
