import React, {useState} from "react";
import {useDispatch} from "react-redux";


type Props = {
  onTextChange: (text: string) => void,
  title: string,
  setListItems: (items: (prevState) => [...any[], string]) => void
}
const HubModal = ({
                    onTextChange,
                    title,
                    setListItems
                  }: Props) => {
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

  return (
    <>
      <h1>{title}</h1>
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
          <p>Список подписок</p>
          <textarea/>
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
