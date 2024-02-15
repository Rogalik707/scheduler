import React, {useState, useEffect, useRef} from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Window from "../components/UI/Window";
import {data} from "../components/local/data";
import HubModal from "../components/HubModal";
import Modal, {ModalRef} from "../components/UI/Modal";
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../store/store";
import CustomModal from "../components/UI/CustomModal";


const MainDesk = () => {

  const [windowText, setWindowText] = useState({
    sub: '',
    scripts: '',
    files: ''
  });

  const modalRef = useRef<ModalRef>(null);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootReducer) => state.isModalOpen);
  const [listItems, setListItems] = useState([]);


  const handleTextChange = (key, newText) => {
    setWindowText(prevState => ({
      ...prevState,
      [key]: newText
    }));
  };

  const handleCloseModal = (key) => {
    dispatch({type: 'CLOSE_MODAL', payload: {key}});
    console.log(isOpen)
  };


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
          isOpen.isModalOpen &&
          <CustomModal>
            <HubModal
              onTextChange={() => handleTextChange}
              handleCloseModal={() => handleCloseModal(isOpen.activeWindowKey)}
              title={data.name.sub}
              setListItems={setListItems}
            />
          </CustomModal>
        }
      </div>
      </body>
    </>
  );
};

export default MainDesk;
