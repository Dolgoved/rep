export const ADD_CHAT = "add chats";
export const DELETE_CHAT = "delete chat";

// создаем для них экнш криейторы
export const addChat = (newChat) =>({
    type: ADD_CHAT,
    payload: newChat,
});
export const deleteChat = () =>({
    type: DELETE_CHAT,
})