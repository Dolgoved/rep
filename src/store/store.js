import { createStore, combineReducers } from "redux";
import { chatsReducer } from "../redux/chats/reducerChats";
import { messagesReducer } from "../redux/messages/reducerMessages";
import { reducer } from "../redux/profile/reducer";

const rootReducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: reducer,
})


export const store = createStore(rootReducer);


