import React, {useEffect, useState} from "react";
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
import AddSubModal from "../components/AddSubModal";
import {getHubs} from '../api'


const MainDesk = () => {
  const tabs = useSelector((state: RootReducer) => state.tabs);
  const isModalOpen = useSelector((state: RootReducer) => state.isModalOpen);
  const hubs = useSelector((state: RootReducer) => state.hubs);
  const subscribes = useSelector((state: RootReducer) => state.subscribes);
  const [hubsList, setHubsList] = useState<any>([])



  useEffect(() => {
    getHubs().then(result => {
      setHubsList(result);
    }).catch(error => {
      console.log('Error fetching hubs:', error);
    });
  }, []);


  return (
    <>
      <Header/>
      <SideBar/>
      <body>
      <div>
        <div className="windows-box">
          <Window
            title={data.name.sub}
            hubsList={hubsList}
          />
          <Window title={data.name.scripts}/>
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
                        subscribes={subscribes}
                      />
                    )
                  } else if (tab.isActive === true && tab.tab.key === 'СКРИПТЫ') {
                    return (
                      <ScriptsModal
                        key={tab.tab.key}
                      />
                    )
                  } else if (tab.isActive === true && tab.tab.key === 'ДОБАВИТЬ ПОДПИСКУ') {
                    return (
                      <AddSubModal
                        key={tab.tab.key}

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
