import React, {useEffect, useRef, useState} from 'react';
import addIcon from '../../assets/img/add_circle.svg';
import deleteIcon from '../../assets/img/delete.svg';
import {ModalRef} from "./Modal";
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../../store/store";

type Props = {
  title?: string,
  style?: React.CSSProperties,
  listItems?: string[]
}

const Window = ({title, style, listItems}: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootReducer) => state.isModalOpen);
  const list = useSelector((state: RootReducer) => state.list);

  const modalRef = useRef<ModalRef>(null);


  // console.log(listItems)
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

  const handleOpenModal = (key) => {
    if (key !== 'ПОДПИСКИ') return
    dispatch({type: 'OPEN_MODAL', payload: {key}});
    // console.log(isOpen)
  };

  // console.log(listItems)

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
        <div className="control-panel-button-add" onClick={() => handleOpenModal(title)}>
          <img src={addIcon} alt="add"/>
        </div>
        <div className="control-panel-button-delete">
          <img src={deleteIcon} alt="delele"/>
        </div>
      </div>
      <div className="window-list">
        {listItems && listItems.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Window;
