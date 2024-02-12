import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Window from "../components/UI/Window";


const MainDesk = () => {
  return (
    <>
      <Header/>
      <SideBar/>
      <body>
      <div>
        <Window title={`ПОДПИСКИ`} style={{top: 90}}/>
        <Window title={"СКРИПТЫ"} style={{top: 360}}/>
        <Window title={"ФАЙЛЫ"} style={{top: 630}}/>
      </div>
      </body>
    </>
  )
}
export default MainDesk
