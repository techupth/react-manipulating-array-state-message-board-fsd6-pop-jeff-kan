import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState([]);
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
            message !== ""
              ? setShowMessage([...showMessage, message])
              : alert("กรอกก่อนเด้อสู");
            setMessage("");
          }}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {showMessage.map((msn, index) => {
          return (
            <div className="message" key={index}>
              <h1>{msn}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  setShowMessage(showMessage.toSpliced(index, 1));
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
