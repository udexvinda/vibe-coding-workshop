
import React, { useState, useRef, useEffect } from 'react';
import { getVibeCodingAnswer } from '../services/geminiService';

interface Message {
  sender: 'user' | 'ai';
  text: string | React.ReactNode;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedKey = sessionStorage.getItem('gemini-api-key');
    if (storedKey) {
      setApiKey(storedKey);
      setMessages([
        { sender: 'ai', text: "Hi there! Curious about Vibe Coding? Ask me anything!" }
      ]);
    } else {
       setMessages([
        { sender: 'ai', text: (
            <div>
              <p className="mb-2">To get started, please enter your Google AI Studio API key below.</p>
              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-3 py-1 bg-[#81c784] text-white text-sm font-semibold rounded-md hover:bg-[#66bb6a] transition-colors"
              >
                Get your Google AI Key
              </a>
            </div>
          ) 
        }
      ]);
    }
  }, []);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSaveKey = () => {
    if (!apiKeyInput.trim()) return;
    const trimmedKey = apiKeyInput.trim();
    sessionStorage.setItem('gemini-api-key', trimmedKey);
    setApiKey(trimmedKey);
    setApiKeyInput('');
    setMessages([
      { sender: 'ai', text: "API Key saved! You can now ask me about Vibe Coding." }
    ]);
  };

  const handleClearKey = () => {
    sessionStorage.removeItem('gemini-api-key');
    setApiKey(null);
    setMessages([
      { sender: 'ai', text: "API Key cleared. Please enter a new key to continue." }
    ]);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading || !apiKey) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await getVibeCodingAnswer(input, apiKey);
      const aiMessage: Message = { sender: 'ai', text: aiResponse };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage: Message = {
        sender: 'ai',
        text: (
          <div>
            <p>Sorry, I'm having trouble connecting. Your API key might be invalid or expired.</p>
            <button
              onClick={handleClearKey}
              className="mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
            >
              Reset API Key
            </button>
          </div>
        )
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (apiKey) {
        handleSend();
      } else {
        handleSaveKey();
      }
    }
  };

  const renderApiKeyInput = () => (
    <div className="p-4 border-t border-gray-200">
      <p className="text-xs text-center text-stone-500 mb-2">Your API key is stored in your browser for this session only.</p>
      <div className="flex items-center bg-gray-100 rounded-full">
        <input
          type="password"
          value={apiKeyInput}
          onChange={(e) => setApiKeyInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your Google AI Studio API Key..."
          className="flex-1 bg-transparent px-4 py-2 text-stone-800 placeholder-gray-500 focus:outline-none"
        />
        <button onClick={handleSaveKey} className="p-2 text-[#81c784] hover:text-[#212121]" aria-label="Save API Key">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </button>
      </div>
    </div>
  );

  const renderMessageInput = () => (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center bg-gray-100 rounded-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question..."
          className="flex-1 bg-transparent px-4 py-2 text-stone-800 placeholder-gray-500 focus:outline-none"
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading} className="p-2 text-[#e57373] hover:text-[#212121] disabled:text-gray-400" aria-label="Send message">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className={`fixed bottom-5 right-5 z-50 transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#e57373] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Open chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </button>
      </div>

      <div className={`fixed bottom-5 right-5 z-50 w-[calc(100vw-40px)] max-w-sm h-[70vh] max-h-[600px] bg-white/80 backdrop-blur-md rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right border border-gray-200 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="p-4 bg-gray-50 flex justify-between items-center rounded-t-xl">
          <h3 className="text-lg font-bold text-stone-800">How to Vibe Code?</h3>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-stone-800" aria-label="Close chat">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div ref={chatMessagesRef} className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-stone-800 text-white' : 'bg-gray-200 text-stone-800'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-lg bg-gray-200 text-stone-800 flex items-center">
                <span className="animate-pulse">● ● ●</span>
              </div>
            </div>
          )}
        </div>

        {apiKey ? renderMessageInput() : renderApiKeyInput()}
      </div>
    </>
  );
};

export default ChatWidget;
