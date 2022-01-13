import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

// создаем для них экнш криейторы
export const addMessage = (newMessage, chatId) =>({
    type: ADD_MESSAGE,
    payload: {
        message: newMessage,
        chatId,
    }
});

export const deleteMessage = (messageId, chatId) =>({
    type: DELETE_MESSAGE,
    payload: {
        messageId,
        chatId,
    }
});

export const addMessageWithReply = (newMessage, chatId) => (dispatch) => {
    dispatch(addMessage(newMessage, chatId));
    if (newMessage.author !== AUTHORS.BOT){
        setTimeout(() => {
            dispatch(addMessage({
                text: "Ой как интересно! Вы такой умный!",
                author: AUTHORS.BOT,
                id: `msg-${Date.now()}`,
              },chatId));
        }, 1000);
    }
}