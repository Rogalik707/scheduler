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

  const dispatch = useDispatch();
  const tabs = useSelector((state: RootReducer) => state.tabs);





  const handleOpenModal = (key) => {
    dispatch({type: 'ADD_TAB', payload: {key}});
    dispatch({type: 'OPEN_MODAL'});

  };


  return (
    <div
      className="window"
      style={style}
    >
      <div className="window-header" >
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
