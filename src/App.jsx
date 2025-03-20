import React, { useState } from 'react'

const App = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('')


  const handleSend = () => {

    if(input.trim() === '') return;

    const newMessage = {sender: 'user', text: input};
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const botReply = {
        send:'bot',
        text:getBotResponse(input)
      }
    })
  

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
