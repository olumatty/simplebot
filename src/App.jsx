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
        text:getBotResponse(input).text
      };

      setMessages((prevMessages)=> [...prevMessages, botReply]);
    },1000)
    setInput('');
  }

  const getBotResponse =(input) => {
    if (input.includes("smartphone" ||"Smartphone")) {
      return { text: "Great! What do you need in a phone? (High Performance, Great Camera, Long Battery, Budget-Friendly)", sender: "bot" };
    }
    if (input.includes("laptop" || "Laptop")) {
      return { text: "What kind of laptop are you looking for? (Gaming, Work/Office, Student, MacBook)", sender: "bot" };
    }
    if (input.includes("accessories" || "Accessories")) {
      return { text: "We have a variety of accessories! (Headphones, Chargers, Phone Cases, Smartwatches)", sender: "bot" };
    }
    if (input.includes("high performance" || "High perfomance")) {
      return { text: "For high performance, I recommend **iPhone 15 Pro Max** or **Samsung S24 Ultra** 🚀", sender: "bot" };
    }
    if (input.includes("great camera" || "Great camera")) {
      return { text: "For the best cameras, check out **Google Pixel 8 Pro** or **iPhone 15 Pro** 📸", sender: "bot" };
    }
    if (input.includes("long battery"|| "Long battery")) {
      return { text: "For battery life, try **Samsung M54** or **iPhone 13 Pro Max** 🔋", sender: "bot" };
    }
    if (input.includes("budget" || "Budget")) {
      return { text: "Affordable picks: **Redmi Note 12**, **Samsung A54**, **Moto G Power** 💰", sender: "bot" };
    }
    if (input.includes("gaming" || "Gaming")) {
      return { text: "Top gaming laptops: **Asus ROG Zephyrus G14**, **Alienware M15 R7** 🎮", sender: "bot" };
    }
    if (input.includes("work" || "Work") || input.includes("office")) {
      return { text: "For work: **MacBook Air M2**, **Dell XPS 15**, **HP Spectre x360** 💼", sender: "bot" };
    }
    if (input.includes("student" || "Student")) {
      return { text: "Student-friendly: **Lenovo Ideapad 3**, **Acer Aspire 5**, **MacBook Air M1** 🎓", sender: "bot" };
    }
    if (input.includes("macbook" || "Macbook")) {
      return { text: "MacBook options: **MacBook Air M2** for portability, **MacBook Pro M3** for power 🍏", sender: "bot" };
    }
    return { text: "I didn't quite get that 🤖. Try again with a keyword like 'Smartphones', 'Laptops', or 'Accessories'. or you can call us 07034567459", sender: "bot" };
  };
  
  const text ="<YOUR_API_KEY>"

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"> 
    <p className='text-2xl font-bold mb-2'>H<span className='text-gray-400'>i</span>Tech </p>
      <div className='w-full max-w-[500px] bg-white shadow-lg rounded-xl p-6 border border-gray-200'>
        <div className='h-[400px] border border-gray-300 rounded-xl overflow-y-auto p-4 bg-gray-50 space-y-3'>
          {messages.map((msg, index) => (
           <div key={index} className={`${msg.sender === 'bot' ? 'items-left bg-[#e1f5fe] p-2 rounded-[10px] w-fit' : 'text-right ml-auto bg-[#c8e6c9] p-2 rounded-[10px] w-fit'}`}>
              <p className='text-sm'>{msg.text}</p>
            </div>
          ))} 
        </div>

        <div className='flex mt-2 content-center gap-3'>
          <input type='text' className='md:w-full md:flex-1 h-14 px-6 md:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none placeholder:text-[14px]' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder='Type your message here...'/>
          <button className='py-3 px-4  md:w-auto bg-blue-500 text-white rounded-lg shadow outline-none transition-transform transform hover:scale-105 hover:bg-gray-200 hover:text-blue-500' onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  )  
}

export default App
