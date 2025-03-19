import React, { useState } from 'react'

const App = () => {

  const [messages, setMessages] = useState([]);

  return (
    <div>
      <div className='max-w-[600px] my-0 mx-auto p-[20px] border border-gray-300 rounded-lg'>
        <div className=''>
          <div>
          <p className='text-2xl'>Hello</p>
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
