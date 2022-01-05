import { SET_NAME, SHOW_NAME } from "./action"

const initialState = {
    showName: true,
    name: "какое-то имя",
  };

export const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case SHOW_NAME:
            return{
                ...state, showName: !state.showName,
            };
        case SET_NAME:
            return{
                ...state, 
                name: action.payload,
            };
        default:
            return state;
    }
}

//console.log(reducer(initialState,SET_NAME));