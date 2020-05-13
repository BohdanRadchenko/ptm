import {lazy} from 'react';


//HOME
export const AsyncHome = lazy(() =>
  import('./pages/HomePage'),
);

//BOARDS
export const AsyncBoards = lazy(() =>
  import('./pages/BoardsPage'),
);

export const AsyncBoardsLists = lazy(() =>
  import('./pages/BoardsListPage'),
);

//AUTH
export const AsyncAuth = lazy(() =>
  import('./pages/AuthPage'),
);


