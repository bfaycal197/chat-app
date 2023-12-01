import React, { useState } from 'react';
import '../../style/chat.css'

const ChatInterface = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
// these are just s that i can try the code , they will be changed by the ones from the backend
  const conversations = [
    { id: 1, title: 'Friend 1' },
    { id: 2, title: 'Friend 2' },
    { id: 3, title: 'Friend 3' },
  ];

  const handleConversationClick = (conversationId) => {
    setSelectedConversation(conversationId);
  };

  return (
    <div className="chat-container">
      <div className="conversation-list">
        {/*just a random text for the test */}
        <h2>Conversations</h2>
        <ul>
          {conversations.map((conversation) => (
            <li key={conversation.id} onClick={() => handleConversationClick(conversation.id)}>
              {conversation.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="conversation-content">
        {selectedConversation ? (
          <div className="message-content">
            <p>Content of conversation {selectedConversation}</p>
          </div>
        ) : (
          <div className="no-conversation-selected">
            <p>Choose a conversation to view content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
