import React, {useEffect} from 'react';
import Tab from './Tab';
import {useSelector} from "react-redux";
import {RootReducer} from "../../store/store";

const Tabs = () => {
  const tabs = useSelector((state: RootReducer) => state.tabs);

  useEffect(() => {
    //tabs.tabs.map(item => {
    //  console.log(item)
    //})
    console.log(tabs)
  }, [])

   return (
     <div className="tabs">
       {tabs.tabs.map((tab, index) => {
         return (
           <Tab key={index} tabIndex={tab.index} title={tab.tab.key}/>
         );
       })}
     </div>
   );
};

export default Tabs;
