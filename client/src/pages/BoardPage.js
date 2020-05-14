import React from "react";
import Header from "../components/Header/Header";
import BoardsContainer
  from "../components/BoardsContainer/BoardsContainer";
import HeaderMobile from "../components/Header/HeaderMobile";

const BoardPage = () => {
  return (
      <div>
        <Header/>
        <HeaderMobile headerType={'Boards'}/>
        <BoardsContainer/>
      </div>
  )
}

export default BoardPage