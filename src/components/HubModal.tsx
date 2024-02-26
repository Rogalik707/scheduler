import React, {useState} from "react";
import {useDispatch} from "react-redux";
import addIcon from "../assets/img/add_circle.svg";
import {data} from "./local/data";
import deleteIcon from "../assets/img/delete-black.svg";


type Props = {
  onTextChange: (text: string) => void,
  setListItems: (items: (prevState) => [...any[], string]) => void,
  inputNameSub: string[],
  setInputNameSub: (items: (prevState) => [...any[], string]) => void
}
const HubModal = ({
                    onTextChange,
                    setListItems,
                    inputNameSub,
                    setInputNameSub
                  }: Props) => {
  const addSub = data.name.addSub
  const [inputTextName, setInputTextName] = useState('');
  const [inputTextURL, setInputTextURL] = useState('');
  const dispatch = useDispatch();


  const handleChangeName = (e) => {
    const newText = e.target.value;
    setInputTextName(newText);
    onTextChange(newText);
  };

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  }

  const handleSaveChanges = () => {
    setListItems((prevState) => [...prevState, inputTextName]);
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setInputNameSub((prevState) => {
      const newState = [...prevState];
      newState.splice(i, 1);
      return newState;
    });
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
              inputNameSub && inputNameSub.map((item, index) => (
                <div key={index}>
                  <div className="modal-box-subs-list-board-item">
                    <p style={{color: '#21272E'}}>{item}</p>
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
