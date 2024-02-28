import React, {useEffect, useState} from 'react';
import addIcon from '../../assets/img/add_circle.svg';
import deleteIcon from '../../assets/img/delete.svg';
import {useDispatch} from "react-redux";
import dropdownIcon from '../../assets/img/arrow_drop_down.svg';
import {deleteHub} from "../../api";

type subItemProps = {
  item: {
    subscribe: string
  }
}

const SubItem = ({item}: subItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {
        <div
          className="window-list-item"
          style={{marginLeft: '0.8vw'}}
        >
          <p>{item.subscribe}</p>
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
      }
    </>
  )
}

type HubItemProps = {
  item: any,
  index: number,
  setSelectedItems: any,
  selectedItems: any
}

const HubItem = ({item, index, setSelectedItems, selectedItems}: HubItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log('item.id', selectedItems)

  const handleSelect = () => {
    setSelectedItems(prevState => {
      if (prevState === item.id) {
        return null;
      } else {
        return item.id;
      }
    });
  }



  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  /*useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.window-hubs-item')) {
        setSelectedItems(null);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);*/


  return (
    <>
      <div
        className="window-list-item"
        style={selectedItems === item.id ? {backgroundColor: 'rgba(77,232,221,0.26)'} : {}}
        key={index}
        onClick={() => {
          handleSelect();
        }}
      >
        <p>{item.name}</p>
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
      {/*{isOpen ? (item.subscribes.subscribes.map((i, index) => {
        return <SubItem item={i} key={index}/>
      })) : null}*/}
    </>
  );
};


type Props = {
  title?: string,
  style?: React.CSSProperties,
  hubsList?: any
}

const Window = ({title, style, hubsList}: Props) => {
  const [selectedItems, setSelectedItems] = useState(null);


  const dispatch = useDispatch();

  const handleOpenModal = (key) => {
    dispatch({type: 'ADD_TAB', payload: {key}});
    dispatch({type: 'OPEN_MODAL'});
  };

  const testFunc = async (id) => {
     const result = await deleteHub(id)
  }

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
        <div className="control-panel-button-delete">
          <img src={deleteIcon} alt="delele" onClick={() => testFunc(selectedItems)}/>
        </div>
      </div>
      <div className="window-list">
        {hubsList?.data && hubsList?.data.map((item, index) => {
          return <HubItem item={item} key={index} index={index} setSelectedItems={setSelectedItems} selectedItems={selectedItems} />
        })}
      </div>
    </div>
  );
};


export default Window;
