import { Message } from "./message";


export const MessageList = ({ messages }) => (
    <div>
      {messages.map(({text, author, id})=>(
        <Message key= {id} author={author} text={text}/>
        ))}
    </div>
  )
  

