import React, { useState, useEffect } from "react";
import { FormControl, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Comps/Message";
import db from "./Firebase/Config";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  // The States
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please, enter your name"));
  }, []);

  // Methods
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Facebook Messanger Clone</h1>
      <h2>Welcome {username}</h2>
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=120&h=120" />

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            type="text"
            placeholder="Enter a message ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="app__input"
          />
          <IconButton
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
            className="app__iconButton"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map((message, index) => (
          <Message username={username} message={message} key={index} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
