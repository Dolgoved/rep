import React, {useState } from 'react';
import ReactDOM from 'react-dom';
import "./style/style.css"

function MessagesForm(){  
    //массив сообщений
    const [messageList,setMessageList]=useState([]);
    const handleMessage = (newMessage) => {
        setMessageList((prevMessageList)=>[...prevMessageList, newMessage]);
    };

    //строка ввода
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (e) =>{    // отправка данных формы
        e.preventDefault();
        setValue("");

        // проверка на пустую строку ввода сообщения пользователя
        const handleTextMessages = ()=>{
            if (!value) {
                alert('необходимо ввести текст'); 
            } else {
                handleMessage({text:value, author:"user"});
                handleMessage({text:'I agree with you', author:"bot"});
            }
        }
        handleTextMessages();
        
    }

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <h2>Введите сообщение роботу:</h2>
                <input className="input_area" type="text" value={value} onChange={handleChange} />
                <input className="input_button" type="submit" value="отправить" />
            </form>
            <div className="messages">{messageList.map(({text,author})=>(<div className={author}>{author}:{text}</div>))}</div>
        </div>
        
    )
}


ReactDOM.render(
    <React.StrictMode>
    <MessagesForm/>
    </React.StrictMode>,
    document.getElementById("root")
    );