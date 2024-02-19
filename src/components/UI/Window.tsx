// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useState} from 'react';
import addIcon from '../../assets/img/add_circle.svg';
import deleteIcon from '../../assets/img/delete.svg';
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../../store/store";
import {data} from "../local/data";

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
  const tabs = useSelector((state: RootReducer) => state.tabs);

  // console.log('123', tabs.tabs)


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
      if (key === data.name.sub) {
        dispatch({type: 'OPEN_MODAL', payload: {key}});

        console.log(key, ` = ${data.name.sub}`)
      } else if (key === data.name.scripts) {
        dispatch({type: 'OPEN_MODAL', payload: {key}});
      }
    // if (key !== 'ПОДПИСКИ') return

    // dispatch({type: 'ADD_TAB', payload: {key}});
  };


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
