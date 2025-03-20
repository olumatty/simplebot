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

  const getBotResponse =(input) => {
    if (input.includes("smartphone")) {
      return { text: "Great! What do you need in a phone? (High Performance, Great Camera, Long Battery, Budget-Friendly)", sender: "bot" };
    }
    if (input.includes("laptop")) {
      return { text: "What kind of laptop are you looking for? (Gaming, Work/Office, Student, MacBook)", sender: "bot" };
    }
    if (input.includes("accessories")) {
      return { text: "We have a variety of accessories! (Headphones, Chargers, Phone Cases, Smartwatches)", sender: "bot" };
    }
    if (input.includes("high performance")) {
      return { text: "For high performance, I recommend **iPhone 15 Pro Max** or **Samsung S24 Ultra** 🚀", sender: "bot" };
    }
    if (input.includes("great camera")) {
      return { text: "For the best cameras, check out **Google Pixel 8 Pro** or **iPhone 15 Pro** 📸", sender: "bot" };
    }
    if (input.includes("long battery")) {
      return { text: "For battery life, try **Samsung M54** or **iPhone 13 Pro Max** 🔋", sender: "bot" };
    }
    if (input.includes("budget")) {
      return { text: "Affordable picks: **Redmi Note 12**, **Samsung A54**, **Moto G Power** 💰", sender: "bot" };
    }
    if (input.includes("gaming")) {
      return { text: "Top gaming laptops: **Asus ROG Zephyrus G14**, **Alienware M15 R7** 🎮", sender: "bot" };
    }
    if (input.includes("work") || input.includes("office")) {
      return { text: "For work: **MacBook Air M2**, **Dell XPS 15**, **HP Spectre x360** 💼", sender: "bot" };
    }
    if (input.includes("student")) {
      return { text: "Student-friendly: **Lenovo Ideapad 3**, **Acer Aspire 5**, **MacBook Air M1** 🎓", sender: "bot" };
    }
    if (input.includes("macbook")) {
      return { text: "MacBook options: **MacBook Air M2** for portability, **MacBook Pro M3** for power 🍏", sender: "bot" };
    }
    return { text: "I didn't quite get that 🤖. Try again with a keyword like 'Smartphones', 'Laptops', or 'Accessories'.", sender: "bot" };
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6"> 
      <div className='w-full max-w-[500px] bg-white shadow-lg rounded-xl p-6 border border-gray-200'>
        <div className='h-[400px] border border-gray-300 rounded-xl overflow-y-auto p-4 bg-gray-50 space-y-3'>
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender ==='bot'?'items-left bg-[#e1f5fe] p-2 rounded-[10px] w-fit' :'items-right bg-[#c8e6c9] p-2 rounded-[10px] w-fit ml-auto'}`}>
              <p className='text-sm'>{message.text}</p>
            </div>
          ))} 
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
