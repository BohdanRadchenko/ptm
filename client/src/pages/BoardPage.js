import React from "react";
import Header from "../components/Header/Header";
import BoardsContainer
  from "../components/BoardsContainer/BoardsContainer";
import HeaderMobile from "../components/Header/HeaderMobile";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

const BoardPage = () => {
  return (
      <div>
        {/*HEADER*/}
        <Header/>
        <HeaderMobile headerType={'Boards'}/>

        {/*BURGER MENU*/}
        <BurgerMenu/>

        {/*CONTENT*/}
        <BoardsContainer/>
      </div>
  )
}

export default BoardPage