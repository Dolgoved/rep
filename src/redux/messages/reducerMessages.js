import { ADD_MESSAGE} from "./actionsMessages";
import { ADD_CHAT} from "../chats/actionsChats"


const initialState = {};



// то же самое, что делали раньше. Только теперь через store
// const handleAddMessage = (newMessage, chatId) =>{
//     setMessages((prevMess)=>({...prevMess,[chatId]:[...prevMess[chatId], newMessage],}));
// };

export const messagesReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [action.payload.chatId]: [...state[action.payload.chatId], action.payload.message]
            };
            // добавляем пустой массив если не было сообщений
        case ADD_CHAT:
            return {
                ...state,
                [action.payload.id]: []
            };
        default:
            return state;
    }
};
console.log(initialState);