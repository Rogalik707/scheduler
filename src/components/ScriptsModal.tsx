import React, {useState} from 'react';
import Condition from "./Condition";
import Period from "./Period";
import Time from "./Time";
import {useDispatch} from "react-redux";


type Props = {
  title: string,
}
const ScriptsModal = ({title}: Props) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();

  const components = {
    option1: <Period/>,
    option2: <Time/>,
    option3: <Condition/>
  };

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  }

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <>
      <h1>{title}</h1>
      <div className="modal-box-scripts">
        <p>Метод</p>
        <select value={selectedValue} onChange={handleChange}/>
      </div>
      <div className="modal-box-scripts-settings">
        <p>Настройки запуска</p>
      </div>
      <div className="modal-box-scripts-container">
        <div className="modal-box-scripts-options">
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            По периоду
          </label>
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            По времени
          </label>
          <label>
            <input
              type="radio"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            По условию
          </label>
        </div>
        {components[selectedOption]}
      </div>
      <div className="modal-buttons-container">
        <button className="button modal-save-changes" >СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
        <button className="button modal-cancel" onClick={closeModal}>ОТМЕНИТЬ</button>
      </div>
    </>
  )
}

export default ScriptsModal
