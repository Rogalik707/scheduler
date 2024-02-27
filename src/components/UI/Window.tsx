import React, {useEffect, useState} from 'react';
import addIcon from '../../assets/img/add_circle.svg';
import deleteIcon from '../../assets/img/delete.svg';
import {useDispatch, useSelector} from "react-redux";
import dropdownIcon from '../../assets/img/arrow_drop_down.svg';

type ListItemProps = {
  item: string,
  index: number,

}

const ListItem = ({item, index, }: ListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});

  const handleSelect = (currentIndex) => {
    if (selectedItems === currentIndex) {
      setSelectedItems(null);
    } else {
      setSelectedItems(currentIndex);
    }
  }

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.window-list-item')) {
        setSelectedItems({});
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div
      className="window-list-item"
      style={selectedItems === index ? {backgroundColor: 'rgba(77,232,221,0.26)'} : {}}
      key={index}
      onClick={() => {
        handleSelect(index);
      }}
    >
      <p>{item}</p>
      <div
        style={{cursor: 'pointer'}}
        className="window-list-item-dropdown"
        onClick={(e) => {
          e.stopPropagation();
          handleIsOpen();
        }}>
        <img
          style={isOpen ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
          src={dropdownIcon}
          alt="▼"/>
      </div>
    </div>
  );
};


type Props = {
  title?: string,
  style?: React.CSSProperties,
  list?: any,
}

const Window = ({title, style, list }: Props) => {
  const dispatch = useDispatch();

  const handleOpenModal = (key) => {
    dispatch({type: 'ADD_TAB', payload: {key}});
    dispatch({type: 'OPEN_MODAL'});
  };


  return (
    <div
      className="window"
      style={style}
    >
      <div className="window-header">
        <p className="window-header-title">{title}</p>
      </div>
      <div className="control-panel">
        <div className="control-panel-button-add" onClick={() => handleOpenModal(title)}>
          <img src={addIcon} alt="add"/>
        </div>
        <div className="control-panel-button-delete" >
          <img src={deleteIcon} alt="delele"/>
        </div>
      </div>
      <div className="window-list">
        {list && list.list.map((item, index) => {
          return <ListItem item={item.title} key={index} index={index}/>
        })}
      </div>
    </div>
  );
};


export default Window;
