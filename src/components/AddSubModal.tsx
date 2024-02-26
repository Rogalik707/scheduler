import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const AddSubModal = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  }

  const handleSaveChanges = () => {
    closeModal();
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div className="add-sub">
      <div className="add-sub-title-container">
        <p>Имя подписки</p>
        <input type="text"/>
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
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          Исторические значения
        </label>
      </div>
      <div className="modal-buttons-container">
        <button className="button modal-save-changes" onClick={handleSaveChanges}>СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
        <button className="button modal-cancel" onClick={closeModal}>ОТМЕНИТЬ</button>
      </div>
    </div>
  )
}

export default AddSubModal
