import React from "react";
import Header from "../components/Header/Header";
import ListContainer
  from "../components/ListsContainer/ListContainer";
import HeaderMobile from "../components/Header/HeaderMobile";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

const ListPage = () => {
  return (
      <div>
        {/*HEADER*/}
        <Header/>
        <HeaderMobile/>

        {/*BURGER MENU*/}
        <BurgerMenu/>

        {/*CONTENT*/}
        <ListContainer/>
      </div>
  )
}

export default ListPage