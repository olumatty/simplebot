import React, { useState } from 'react'

const App = () => {

  const [messages, setMessages] = useState([]);

  return (
    <div className='self-center'> 
      <div className='max-w-[600px] my-0 mx-auto p-[20px] border border-gray-300 rounded-lg'>
        <div className='h-[400px] border border-gray-300 rounded-lg overflow-y-auto p-[10px] bg-[#f9f9f9] mb-[10px]'> 
          <div>
          <p className='my-[10px] mx-0'>Hello</p>
          </div>
        </div>

        <div className=''>
          <input type='text' value={(e) => setMessages(e.target.value)} placeholder='Type your message here...'/>
          <button>send</button>
        </div>
      </div>
    </div>
  )
}

export default App
