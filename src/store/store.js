import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { chatsReducer } from "../redux/chats/reducerChats";
import { messagesReducer } from "../redux/messages/reducerMessages";
import { reducer } from "../redux/profile/reducer";

import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "gbMessenger",
    storage,
    blacklist: ['profile'],
  };

const rootReducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

export const persistor = persistStore(store);

