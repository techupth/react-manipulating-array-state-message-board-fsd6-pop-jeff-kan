import { useState } from "react";

function MessageBoard() {
  const [inputMessage,setInputMessage] = useState("")
  const [message,setMessage] = useState([])

  const submittedMessage = (event)=>{
    event.preventDefault();
    const newSubmit = [...message];
    newSubmit.push(inputMessage);
    setMessage(newSubmit);
  }

  const deleteMessage = (messageIndex)=>{
    const newMessage = [...message];
    newMessage.splice(messageIndex,1);
    setMessage(newMessage);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={(event)=>{setInputMessage(event.target.value)}}
          />
        </label>
        <button className="submit-message-button" onClick={submittedMessage}>Submit</button>
      </div>
      <div class="board">
        { message.map((item,index)=>{
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button className="delete-button" onClick={()=>{
                deleteMessage(index)
              }}>x</button>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default MessageBoard;
