import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual authentication check

  const handleSendMessage = async () => {
    if (!isAuthenticated) {
      alert('Please log in to send a message.');
      return;
    }

    const userMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Call the chat API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    const botMessage = { role: 'assistant', text: data.reply, timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setInput('');
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <span>{msg.role === 'user' ? 'You' : 'AI'}: </span>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="input"
      />
      <button onClick={handleSendMessage} className="send-button">Send</button>
    </div>
  );
};

export default ChatBox;