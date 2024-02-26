import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../../store/store";

type Props = {
  title: string,
  tabIndex: number
}
const Tab = ({title, tabIndex}: Props) => {
  const dispatch = useDispatch();
  const tabs = useSelector((state: RootReducer) => state.tabs);


  const handleCloseTab = (index) => {
    dispatch({type: 'REMOVE_TAB', payload: {index}});
  }

  const handleSetActiveTab = () => {
    dispatch({type: 'SET_ACTIVE_TAB', payload: {tabIndex}});
  }


  return (
    <div className="tab"
         style={tabs.tabs[tabIndex].isActive ? {backgroundColor: '#00ec82'} : {backgroundColor: "#181c21"}}
         onClick={handleSetActiveTab}>
      {title}
      <div className="tab-close" onClick={(e) => {
        e.stopPropagation();
        handleCloseTab(tabIndex)
      }}>
        ✖
      </div>
    </div>
  );
};

export default Tab;
