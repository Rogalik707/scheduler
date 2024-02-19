import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Window from "../components/UI/Window";
import {data} from "../components/local/data";
import HubModal from "../components/HubModal";
import {useDispatch, useSelector} from "react-redux";
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

  const dispatch = useDispatch();
  const [listItems, setListItems] = useState([]);
  const [tabsList, setTabsList] = useState<any>([]);
  const tabs = useSelector((state: RootReducer) => state.tabs);
  const isModalOpen = useSelector((state: RootReducer) => state.isModalOpen);


  const handleTextChange = (key, newText) => {
    setWindowText(prevState => ({
      ...prevState,
      [key]: newText
    }));
  };

  const handleCloseModal = (key) => {
    console.log(key)
    // dispatch({type: 'REMOVE_TAB', payload: {key}});
    dispatch({type: 'CLOSE_MODAL', payload: {key}});
  };

  console.log('asdfaf', isModalOpen.activeWindowKey)


  useEffect(() => {
    setTabsList(tabs)
    console.log('tabsList', tabsList.tabs?.[0].index)

  }, [tabs]);
  return (
    <>
      <Header/>
      <SideBar/>
      <body>
      <div>
        <>
          <Window
            title={data.name.sub}
            style={{top: 90}}
            listItems={listItems}
          />
          <Window title={data.name.scripts} style={{top: 360}}/>
          <Window title={data.name.files} style={{top: 630}}/>
        </>
        {
          // tabsList?.tabs?.[0].index >= 0 ?
          isModalOpen.isModalOpen ?
          (<CustomModal>
            {/*<Tabs />*/}
            { isModalOpen.activeWindowKey.key === 'ПОДПИСКИ' &&
              <HubModal
                onTextChange={() => handleTextChange}
                handleCloseModal={() => handleCloseModal(tabs.length -1)}
                title={data.name.sub}
                setListItems={setListItems}
              />
            }
            { isModalOpen.activeWindowKey.key === 'СКРИПТЫ' &&
              <ScriptsModal
                handleCloseModal={() => handleCloseModal(tabs.length -1)}
                title={data.name.scripts}
              />
            }


          </CustomModal>) : null
        }
      </div>
      </body>
    </>
  );
};

export default MainDesk;
