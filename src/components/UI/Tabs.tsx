import React, {useEffect, useState} from 'react';
import Tab from './Tab';
import {useSelector} from "react-redux";

const Tabs = () => {
  const tabs = useSelector((state: any) => state.tabs);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(tabs.tabs)) {
      setListItems(tabs.tabs);
    } else {
      console.error('tabs.tabs is not an array');
    }
    console.log(listItems)
  }, [tabs]);

  return (
    <div>
      {listItems.map((tab, index) => (
        <Tab key={index} title={tab.tab} />
      ))}
    </div>
  );
};

export default Tabs;
