import React, {useState} from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Window from "../components/UI/Window";
import {data} from "../components/local/data";
import HubModal from "../components/HubModal";
import {useSelector} from "react-redux";
import {RootReducer} from "../store/store";
import CustomModal from "../components/UI/CustomModal";
import Tabs from "../components/UI/Tabs";
import ScriptsModal from "../components/ScriptsModal";


const MainDesk = () => {

  const [windowText, setWindowText] = useState({
    sub: '',
    scripts: '',
    files: ''
  });

  const [listItems, setListItems] = useState([]);
  const tabs = useSelector((state: RootReducer) => state.tabs);
  const isModalOpen = useSelector((state: RootReducer) => state.isModalOpen);


  const handleTextChange = (key, newText) => {
    setWindowText(prevState => ({
      ...prevState,
      [key]: newText
    }));
  };

  console.log('tabs', tabs)



  return (
    <>
      <Header/>
      <SideBar/>
      <body>
      <div>
        <div className="windows-box">
          <Window title={data.name.sub} listItems={listItems}/>
          <Window title={data.name.scripts} />
          <Window title={data.name.files}/>
        </div>
        {
          tabs.tabs.length > 0 && isModalOpen.isModalOpen === true ?
            (<CustomModal>
              <Tabs/>
              {
                tabs.tabs.map((tab) => {
                  if (tab.isActive === true && tab.tab.key === 'ПОДПИСКИ') {
                    return (
                      <HubModal
                        key={tab.tab.key}
                        onTextChange={() => handleTextChange}
                        title={data.name.sub}
                        setListItems={setListItems}
                      />
                    )
                  } else if (tab.isActive === true && tab.tab.key === 'СКРИПТЫ') {
                    return (
                      <ScriptsModal
                        key={tab.tab.key}
                        title={data.name.scripts}
                      />
                    )
                  } else return null;
                })
              }
            </CustomModal>) : null
        }
      </div>
      </body>
    </>
  );
};

export default MainDesk;
