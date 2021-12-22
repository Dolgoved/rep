import { AUTHORS } from "../utils/constants";


export const MessageList = ({ messages }) => (
  <div className="messages">
    {messages.map(({ text, author, id }) => (
      <div
        key={id}
        className={author === AUTHORS.HUMAN ? "user" : "bot"}
      >
        {author}: {text}
      </div>
    ))}
  </div>
);