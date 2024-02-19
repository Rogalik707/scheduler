import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../../store/store";

type Props = {
  title: string,
  tabIndex: number
}
const Tab = ({ title, tabIndex }: Props) => {
  const dispatch = useDispatch();
  const tabs = useSelector((state: RootReducer) => state.tabs);
  const [isActive, setIsActive] = useState(false);


  const handleCloseTab = (index) => {
    console.log('index component', index)
    dispatch({type: 'REMOVE_TAB', payload: {index}});
  }

  const handleSetActiveTab = () => {
    dispatch({type: 'SET_ACTIVE_TAB', payload: {index: tabIndex, isActive: true}});
    setIsActive(!isActive)
    console.log('tabs', isActive)
  }


  return (
    <div className="tab" style={isActive ? {backgroundColor: '#00ec82'}: {backgroundColor: "#181c21"}} onClick={handleSetActiveTab}>
      {title}
      <div className="tab-close" onClick={(e) => { e.stopPropagation(); handleCloseTab(tabIndex)}}>
        ✖
      </div>
    </div>
  );
};

export default Tab;
