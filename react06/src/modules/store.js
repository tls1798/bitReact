import { createContext } from "react";

export const LOGIN='login';
export const LOGOUT='logout';

const UserCtxt = createContext();

export const initialState = {
    result:false,
    username:'guest',
};
export const reducer = (state,action) => {
  console.log(state);
    switch (action.type) {
      case LOGIN:
        return {...state,result:true,username:action.username};
      case LOGOUT:
        return {...state,result:false, username:'guest'}
      default:
        return state;
    }
};

export default UserCtxt;