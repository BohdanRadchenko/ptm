import {lazy} from 'react';


//HOME
export const AsyncHome = lazy(() =>
  import('./pages/HomePage'),
);

//BOARDS
export const AsyncBoard = lazy(() =>
  import('./pages/BoardPage'),
);

export const AsyncList = lazy(() =>
  import('./pages/ListPage'),
);

//AUTH
export const AsyncAuth = lazy(() =>
  import('./pages/AuthPage'),
);


