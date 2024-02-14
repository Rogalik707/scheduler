import React, {useEffect, useRef, useState} from 'react';
import addIcon from '../../assets/img/add_circle.svg';
import deleteIcon from '../../assets/img/delete.svg';
import Modal, {ModalRef} from "./Modal";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

type Props = {
  title: string,
  style?: React.CSSProperties,
  onTextChange: (text: string) => void
}

const Window = ({title, style, onTextChange}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);


  const handleChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    onTextChange(newText);
  };

  const handleSaveChanges = () => {
    setListItems((prevState) => [...prevState, inputText]);
    setInputText('')
    handleCloseModal();
  }



  const modalRef = useRef<ModalRef>(null);

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('window-header')) {
      setIsDragging(true);
      setOffsetX(e.clientX - e.target.parentElement.getBoundingClientRect().left);
      setOffsetY(e.clientY - e.target.parentElement.getBoundingClientRect().top);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      e.target.parentElement.style.left = e.clientX - offsetX + 'px';
      e.target.parentElement.style.top = e.clientY - offsetY + 'px';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.open();
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
      setIsModalOpen(false);
    }
  };

useEffect(() => {
  console.log(listItems)
}, [listItems]);

  return (
    <div
      className="window"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={style}
    >
      <div className="window-header" onMouseDown={handleMouseDown}>
        <p className="window-header-title">{title}</p>
      </div>
      <div className="control-panel">
        <div className="control-panel-button-add" onClick={handleOpenModal}>
          <img src={addIcon} alt="add" />
        </div>
        <div className="control-panel-button-delete">
          <img src={deleteIcon} alt="delele"/>
        </div>
      </div>
      <div className="window-list">
        {listItems.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>


      <Modal ref={modalRef} >
        <h1>{title}</h1>
        <div className="modal-name-box">
          <p>Имя Подписки</p>
          <input value={inputText} onChange={handleChange}/>
        </div>
        <div className="modal-buttons-container">
          <button className="button modal-save-changes" onClick={handleSaveChanges}>СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
          <button className="button modal-cancel" onClick={handleCloseModal}>ОТМЕНИТЬ</button>
        </div>
      </Modal>
    </div>

  );
};

export default Window;
