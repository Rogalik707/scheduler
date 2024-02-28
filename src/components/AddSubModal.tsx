import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import historyIcon from '../assets/img/update.svg';
import ScriptsPanel from "./ScriptsPanel";
import triangleIcon from '../assets/img/rewind.svg';
import doubleTriangleIcon from '../assets/img/double_rewind.svg';
import {RootReducer} from "../store/store";


type Props = {
  setInputNameSub: (items: (prevState) => [...any[], string]) => void,
}
const AddSubModal = ({setInputNameSub}: Props) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputTextName, setInputTextName] = useState('');

  const dispatch = useDispatch();
  const tabs = useSelector((state: RootReducer) => state.tabs);



  const handleChangeName = (e) => {
    const newText = e.target.value;
    setInputTextName(newText);
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  }

  const handleSaveChanges = () => {
    dispatch({type: 'PUSH_TO_SUBSCRIBES_LIST', payload: {subscribe: inputTextName}});
    setInputTextName('');
    // dispatch({type: 'REMOVE_TAB', payload: {index: tabs.tabs.findIndex(tab => tab.isActive)}});
  }


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div className="add-sub">
      <div className="add-sub-title-container">
        <p>Имя подписки</p>
        <input type="text" onChange={handleChangeName}/>
      </div>
      <p>Настройка подписки</p>
      <div className="add-sub-settings">
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          Текущие значения
        </label>
        <label className="add-sub-settings-params">
          <input type="checkbox"/>
          По интервалу
          <input className="add-sub-settings-input" type="text"/>
        </label>
        <label className="add-sub-settings-params">
          <input type="checkbox"/>
          По изменениям
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          Исторические значения
        </label>
        <label className="add-sub-settings-params">
          <input type="checkbox"/>
          Интервал
          <input className="add-sub-settings-input" type="text"/>
        </label>
      </div>

      <div className="add-sub-panel-subs">

        <div className="add-sub-available-subs">
          <div className="add-sub-title">
            <img src={historyIcon} alt="history icon"/>
            <p>ДОСТУПНЫЕ ПОДПИСКИ</p>
          </div>
          <ScriptsPanel/>
        </div>

        <div className="add-sub-controls">
          <img className="triangle-right" src={triangleIcon} alt="rewind"/>
          <img className="triangle-left" src={triangleIcon} alt="rewind"/>
          <img className="triangle-right" src={doubleTriangleIcon} alt="rewind"/>
          <img className="triangle-left" src={doubleTriangleIcon} alt="rewind"/>
        </div>

        <div className="add-sub-my-subs">
          <div className="add-sub-title">
            <p>МОЙ ДОСТУП</p>
          </div>
          <ScriptsPanel/>
        </div>

      </div>

      <div className="modal-buttons-container">
        <button className="button modal-save-changes" onClick={handleSaveChanges}>СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
        <button className="button modal-cancel" onClick={closeModal}>ОТМЕНИТЬ</button>
      </div>
    </div>
  )
}

export default AddSubModal
