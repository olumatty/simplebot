import React, { useState } from 'react'

const App = () => {

  const [messages, setMessages] = useState([{ text: "Hi there! 👋 Looking for a new gadget? Let me help! 📱", sender: "bot" }]);
  const [input, setInput] = useState('')


  const handleSend = () => {

    if(input.trim() === '') return;

    const newMessage = {sender: 'user', text: input};
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const botReply = {
        sender:'bot',
        text:getBotResponse(input)
      };

      setMessages((prevMessages)=> [...prevMessages, botReply],1000);
    })
    setInput('');
  }

  const getBotResponse =(userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes('smartphones')) {
      return "What features do you need? 📱 1️⃣ High-performance 2️⃣ Great camera 3️⃣ Long battery 4️⃣ Budget-friendly";
    }else if(lowerCaseMessage.includes('camera')){
      return "Here are some options: 📸 1. iPhone 15 Pro 2. Samsung S24 Ultra 3. Google Pixel 8 Pro. Which one interests you?";
    } else if (lowerCaseMessage.includes('discount')) {
      return "We have a **10% discount** on the Google Pixel 8 Pro! 🎉";
    } else if(lowerCaseMessage.includes('shipping')){
      return "Standard shipping: 3-5 days 📦 | Express shipping: 1-2 days 🚀. Which one do you prefer?"
    } else {
      return "I didn't quite get that 🤖. Can you specify what you're looking for?";
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6"> 
      <div className='w-full max-w-[500px] bg-white shadow-lg rounded-xl p-6 border border-gray-200'>
        <div className='h-[400px] border border-gray-300 rounded-xl overflow-y-auto p-4 bg-gray-50 space-y-3'> 
         <div className=''>
          <p className=''>Hello</p>
          </div>
        </div>

        <div className='flex mt-2 content-center gap-3'>
          <input type='text' className='flex-1 h-14 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none placeholder:text-[14px]' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder='Type your message here...'/>
          <button className='py-3 px-4 bg-blue-500 text-white rounded-lg shadow outline-none transition-transform transform hover:scale-105 hover:bg-gray-200 hover:text-blue-500' onClick={handleSend}>send</button>
        </div>
      </div>
    </div>
  )  
}

export default App
