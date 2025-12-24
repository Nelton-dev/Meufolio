import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { initializeChat, sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: 'Olá! Sou a IA assistente deste portfólio. Posso responder perguntas sobre as habilidades, experiência e projetos do Nelton. Como posso ajudar?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false); // Controls the loader
  const [isAnimating, setIsAnimating] = useState(false); // Controls the typing effect lock
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeChat();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isAnimating]);

  const typeText = (text: string, messageId: string) => {
    setIsAnimating(true);
    let index = 0;
    
    const intervalId = setInterval(() => {
      setMessages((prev) => 
        prev.map((msg) => {
          if (msg.id === messageId) {
            return { ...msg, text: text.slice(0, index + 1) };
          }
          return msg;
        })
      );

      index++;

      if (index === text.length) {
        clearInterval(intervalId);
        setIsAnimating(false);
      }
    }, 20); // Speed of typing (ms per character)
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isAnimating) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true); // Show loader

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      
      const aiMsgId = (Date.now() + 1).toString();
      const aiMsg: ChatMessage = {
        id: aiMsgId,
        role: 'model',
        text: '' // Start empty for typing effect
      };
      
      setIsTyping(false); // Hide loader
      setMessages(prev => [...prev, aiMsg]);
      
      // Start typing effect
      typeText(responseText, aiMsgId);

    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = {
         id: (Date.now() + 1).toString(),
         role: 'model',
         text: 'Desculpe, ocorreu um erro na comunicação.'
      };
      setIsTyping(false);
      setMessages(prev => [...prev, errorMsg]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-fade-in-up transition-all">
          {/* Chat Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <Bot size={20} />
              <span className="font-semibold">Portfolio Assistant AI</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-950 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                  {msg.role === 'model' && msg.text === '' && !isTyping && (
                     <span className="inline-block w-1.5 h-4 bg-primary align-middle animate-pulse ml-1"></span>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
               <div className="flex justify-start">
                 <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-2">
                   <Loader2 className="w-4 h-4 animate-spin text-primary" />
                   <span className="text-xs text-slate-400">Digitando...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Pergunte algo..."
                disabled={isTyping || isAnimating}
                className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary/50 dark:text-white border border-transparent focus:border-primary transition-all disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping || isAnimating}
                className="p-2 bg-primary rounded-full text-white hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
                <span className="text-[10px] text-slate-400">Powered by Google Gemini</span>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-primary/40 hover:scale-110 transition-all duration-300"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        
        {/* Tooltip hint if closed */}
        {!isOpen && (
          <span className="absolute right-16 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-xs py-1 px-3 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Fale com a IA
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;