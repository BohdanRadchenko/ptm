export const ActionTypes = {

  //AUTH HANDLER
  HANDLE_AUTH_IN: 'HANDLE_AUTH_IN',
  HANDLE_AUTH_OUT: 'HANDLE_AUTH_OUT',
  // -----------------------------------------------------------------


  // ---- CONTROLLER ACTION ------------------------------------------
  //BURGER HANDLER
  HANDLE_BURGER_TOGGLE: 'HANDLE_BURGER_TOGGLE',
  HANDLE_BURGER_OPEN: 'HANDLE_BURGER_OPEN',
  HANDLE_BURGER_CLOSE: 'HANDLE_BURGER_CLOSE',

  //CREATE MODAL
  //CARDS
  CREATE_MODAL_CARDS_OPEN: 'CREATE_MODAL_CARDS_OPEN',
  CREATE_MODAL_CARDS_CLOSE: 'CREATE_MODAL_CARDS_CLOSE',

  //BOARDS
  CREATE_MODAL_BOARDS_OPEN: 'CREATE_MODAL_BOARDS_OPEN',
  CREATE_MODAL_BOARDS_CLOSE: 'CREATE_MODAL_BOARDS_CLOSE',
  // -----------------------------------------------------------------


  // ---- DRAG AND DROP ACTION----------------------------------------
  DRAG_HAPPENED: 'DRAG_HAPPENED',
  // -----------------------------------------------------------------


  // ---- LISTS ACTION -----------------------------------------------
  //LISTS
  LISTS_REQUEST: 'LISTS_REQUEST',
  LISTS_SUCCESS: 'LISTS_SUCCESS',
  LISTS_ERROR: 'LISTS_ERROR',

  //LISTS PATCH
  LIST_PATCH_REQUEST: 'LIST_PATCH_REQUEST',
  LIST_PATCH_SUCCESS: 'LIST_PATCH_SUCCESS',
  LIST_PATCH_ERROR: 'LIST_PATCH_ERROR',

  //CRETE CARDS
  CREATE_CARDS_REQUEST: 'CREATE_CARDS_REQUEST',
  CREATE_CARDS_SUCCESS: 'CREATE_CARDS_SUCCESS',
  CREATE_CARDS_ERROR: 'CREATE_CARDS_ERROR',
  // -----------------------------------------------------------------


  // ---- BOARDS ACTION-----------------------------------------------
  //BOARDS GET ALL
  BOARDS_REQUEST: 'BOARDS_REQUEST',
  BOARDS_SUCCESS: 'BOARDS_SUCCESS',
  BOARDS_ERROR: 'BOARDS_ERROR',

  //BOARD GET ALL
  BOARD_CREATE_REQUEST: 'BOARD_CREATE_REQUEST',
  BOARD_CREATE_SUCCESS: 'BOARD_CREATE_SUCCESS',
  BOARD_CREATE_ERROR: 'BOARD_CREATE_ERROR',

  //DELETE BOARD BY ID
  BOARD_DELETE_REQUEST: 'BOARD_DELETE_REQUEST',
  BOARD_DELETE_SUCCESS: 'BOARD_DELETE_SUCCESS',
  BOARD_DELETE_ERROR: 'BOARD_DELETE_ERROR',
  // -----------------------------------------------------------------


  // ---- SESSION ACTION----------------------------------------------
  // SIGN UP
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',

  //SIGN IN
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',

  //REFRESH USER
  REFRESH_USER_REQUEST: 'REFRESH_USER_REQUEST',
  REFRESH_USER_SUCCESS: 'REFRESH_USER_SUCCESS',
  REFRESH_USER_ERROR: 'REFRESH_USER_ERROR',

  //LOG OUT USER
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERROR: 'LOGOUT_ERROR',
  // -----------------------------------------------------------------
};