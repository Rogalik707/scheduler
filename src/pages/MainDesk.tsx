import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Window from "../components/UI/Window";
import {data} from "../components/local/data";

const MainDesk = () => {

  const [windowText, setWindowText] = useState({
    sub: '',
    scripts: '',
    files: ''
  });

  const handleTextChange = (key, newText) => {
    setWindowText(prevState => ({
      ...prevState,
      [key]: newText
    }));
  };

  return (
    <>
      <Header />
      <SideBar />
      <body>
      <div>
          <>
            <Window onTextChange={(newText) => handleTextChange('sub', newText)} title={data.name.sub} style={{ top: 90 }} />
            <Window onTextChange={(newText) => handleTextChange('scripts', newText)} title={data.name.scripts} style={{ top: 360 }} />
            <Window onTextChange={(newText) => handleTextChange('files', newText)} title={data.name.files} style={{ top: 630 }} />
          </>
      </div>
      </body>
    </>
  );
};

export default MainDesk;
