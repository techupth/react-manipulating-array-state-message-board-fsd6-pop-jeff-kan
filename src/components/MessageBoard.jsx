import { useState } from "react";

function MessageBoard() {
  const [showMessage, setShowMessage] = useState([]);
  const [messageText, setMessageText] = useState("");

  const handleMessageTextChange = (event) => {
    setMessageText(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...showMessage];
    newMessage.push(messageText);
    setShowMessage(newMessage);
  };

  const deleteMessage = (messageIndex) => {
    const newMessage = [...showMessage];
    newMessage.splice(messageIndex, 1);
    setShowMessage(newMessage);
  };

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
            onChange={handleMessageTextChange}
            value={messageText}
          />
        </label>
        <button onClick={addMessage} className="submit-message-button">
          Submit
        </button>
      </div>
      <div class="board">
        <ul>
          {showMessage.map((message, index) => (
            <h1 className="message" key={index}>
              {message}
              <button
                onClick={() => {
                  deleteMessage(index);
                }}
                className="delete-button"
              >
                x
              </button>
            </h1>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MessageBoard;
