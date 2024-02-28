import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import addIcon from "../assets/img/add_circle.svg";
import {data} from "./local/data";
import deleteIcon from "../assets/img/delete-black.svg";
import {RootReducer} from "../store/store";
import {createHub} from "../api"


type Props = {
  subscribes: any,
}
const HubModal = ({
                    subscribes,
                  }: Props) => {
  const addSub = data.name.addSub
  const [inputTextName, setInputTextName] = useState('');
  const [inputTextURL, setInputTextURL] = useState('');
  const [inputTextComment, setInputTextComment] = useState('');

  const dispatch = useDispatch();
  const tabs = useSelector((state: RootReducer) => state.tabs);

  // console.log('subscribes', subscribes)

  const handleChangeName = (e) => {
    const newText = e.target.value;
    setInputTextName(newText);
  };

  const closeModal = () => {
    dispatch({type: 'REMOVE_TAB', payload: {index: tabs.tabs.findIndex(tab => tab.isActive)}});
    dispatch({type: 'CLOSE_MODAL'});
  }

  const handleSaveChanges = async () => {
    const uniqueId = Date.now().toString()
    console.log(uniqueId)
      try {
        const result = await createHub({
          key: uniqueId,
          name: inputTextName,
          url: inputTextURL ? inputTextURL : 'The url is missing',
          comment: inputTextComment ? inputTextComment :'The comment is missing'
        })
        console.log('result', result)
      } catch (e) {
        console.log('result error', e)
      }

    // dispatch({type: 'PUSH_TO_HUBS_LIST', payload: {hubName: inputTextName, subscribes: subscribes}});
    setInputTextName('')
    closeModal();
  }

  const handleChangeURL = (e) => {
    const newText = e.target.value;
    setInputTextURL(newText);
  }

  const handleChangeComment = (e) => {
    const newText = e.target.value;
    setInputTextComment(newText)
  }

  const addSubscribe = (key) => {
    dispatch({type: 'ADD_TAB', payload: {key}})
  }

  const deleteSub = (i) => {
    dispatch({type: 'REMOVE_FROM_SUBSCRIBES_LIST', payload: {index: i}})
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
            <textarea value={inputTextComment} onChange={handleChangeComment}/>
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
              subscribes.subscribes && subscribes.subscribes.map((item, index) => (
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
        <button
          className="button modal-save-changes"
          disabled={!inputTextName}
          onClick={handleSaveChanges}
          style={{ pointerEvents: !inputTextName ? 'none' : 'auto' }}
        >
          СОХРАНИТЬ ИЗМЕНЕНИЯ
        </button>
        <button className="button modal-cancel" onClick={closeModal}>ОТМЕНИТЬ</button>
      </div>
    </>
  )
}

export default HubModal
