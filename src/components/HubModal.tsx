import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import addIcon from "../assets/img/add_circle.svg";
import {data} from "./local/data";
import deleteIcon from "../assets/img/delete-black.svg";


type Props = {
  // setListItems: (items: (prevState) => [...any[], string]) => void,
  inputNameSub: string[],
  setInputNameSub: (items: (prevState) => [...any[], string]) => void,
  list: any
}
const HubModal = ({
                    // setListItems,
                    inputNameSub,
                    setInputNameSub,
                    list
                  }: Props) => {
  const addSub = data.name.addSub
  const [inputTextName, setInputTextName] = useState('');
  const [inputTextURL, setInputTextURL] = useState('');

  const dispatch = useDispatch();

  console.log('list', list)

  const handleChangeName = (e) => {
    const newText = e.target.value;
    setInputTextName(newText);
  };

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  }

  const handleSaveChanges = () => {
    dispatch({type: 'PUSH_TO_LIST', payload: {title: inputTextName, sub: ''}});

    // setListItems((prevState) => [...prevState, inputTextName]);
    setInputTextName('')
    closeModal();
  }


  const handleChangeURL = (e) => {
    const newText = e.target.value;
    setInputTextURL(newText);
    // onTextChange(newText);
  }

  const addSubscribe = (key) => {
    dispatch({type: 'ADD_TAB', payload: {key}})
  }

  const deleteSub = (i) => {
    dispatch({type: 'REMOVE_FROM_LIST', payload: {index: i}})
  }


  return (
    <>
      <div className="modal-box-fill">
        <div className="modal-box-wrapper">
          <div className="modal-box-container">
            <p>Имя Hub</p>
            <input value={inputTextName} onChange={handleChangeName}/>
          </div>
          <div className="modal-box-container">
            <p>URL</p>
            <input value={inputTextURL} onChange={handleChangeURL}/>
          </div>
          <div className="modal-box-container">
            <p>Комментарий</p>
            <textarea/>
          </div>
        </div>

        <div className="modal-box-subs-list">
          <div className="modal-box-subs-list-title">
            <p>Список подписок</p>
            <div className="modal-box-subs-list-title-button" onClick={() => addSubscribe(addSub)}>
              <img src={addIcon} alt="add"/>
            </div>
          </div>
          <div className="modal-box-subs-list-board">
            {
              list && list.list.map((item, index) => (
                <div key={index}>
                  <div className="modal-box-subs-list-board-item">
                    <p style={{color: '#21272E'}}>{item.subscribe}</p>
                    <div style={{cursor: 'pointer'}} onClick={() => deleteSub(index)}>
                      <img src={deleteIcon} alt="delete"/>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="modal-buttons-container">
        <button className="button modal-save-changes" onClick={handleSaveChanges}>СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
        <button className="button modal-cancel" onClick={closeModal}>ОТМЕНИТЬ</button>
      </div>
    </>
  )
}

export default HubModal
