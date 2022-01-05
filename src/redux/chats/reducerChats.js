import { ADD_CHAT, DELETE_CHAT } from "./actionsChats";


const initialState = [
   
];

export const chatsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_CHAT:
            return[
                ...state, action.payload,
            ];
        
        case DELETE_CHAT:
            return[
                ...state,
            ];

        default:
            return state;
    }
};
//console.log(initialState);