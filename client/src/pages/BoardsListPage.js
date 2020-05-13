import React from "react";
import Header from "../components/Header/Header";
import BoardsContainer
  from "../components/BoardsContainer/BoardsContainer";

const BoardsListPage = () => {
  return (
      <div>
        <Header/>
        Boards List Page  (ALL LISTS)
        <BoardsContainer/>
      </div>
  )
}

export default BoardsListPage