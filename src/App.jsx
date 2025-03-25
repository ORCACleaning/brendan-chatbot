import { useState } from 'react'

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'G’day! I’m Brendan from Orca Cleaning 🐳 Ready to get your vacate cleaning quote started. What suburb is the property in?' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return

    setMessages(prev => [...prev, { sender: 'user', text: input }])
    setInput('')

    // Simulated bot reply (we’ll wire this up to the backend later)
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: `Got it! "${input}" – what’s the number of bedrooms?` }])
    }, 600)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-4 flex flex-col space-y-2 overflow-y-auto h-[70vh]">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded-xl max-w-[80%] ${msg.sender === 'bot' ? 'bg-blue-100 self-start' : 'bg-green-100 self-end'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="w-full max-w-md mt-4 flex">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-3 rounded-l-2xl border border-gray-300"
          placeholder="Type your reply..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded-r-2xl">Send</button>
      </div>
    </div>
  )
}

export default App
