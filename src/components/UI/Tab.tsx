import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../../store/store";
import {data} from "../local/data";

type Props = {
  title: string,
  tabIndex: number
}
const Tab = ({ title, tabIndex }: Props) => {
  const tabName = title === "СКРИПТЫ" ? data.name.editScripts :
    (title === "ПОДПИСКИ" ? data.name.addDataSource : title);

  const dispatch = useDispatch();
  const tabs = useSelector((state: RootReducer) => state.tabs);

  const handleCloseTab = () => {
    dispatch({ type: 'REMOVE_TAB', payload: { index: tabIndex } });
  }

  const handleSetActiveTab = (e) => {
    if (e.button === 0) {
      dispatch({ type: 'SET_ACTIVE_TAB', payload: { tabIndex } });
    }
    else if (e.button === 1) {
      handleCloseTab();
    }
  }

  return (
    <div className="tab"
         style={tabs.tabs[tabIndex].isActive ? { backgroundColor: 'rgba(0,236,130,0.63)' } : { backgroundColor: "#181c21" }}
         onMouseDown={handleSetActiveTab}>
      <p>{tabName}</p>
      <div className="tab-close" onClick={(e) => {
        e.stopPropagation();
        handleCloseTab();
      }}>
        ✖
      </div>
    </div>
  );
};

export default Tab;

