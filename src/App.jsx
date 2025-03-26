import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card.jsx"
import { Button } from "@/components/ui/button.jsx"
import "@/App.css" // Make sure Tailwind base is included

export default function App() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "G’day! I’m Brendan from Orca Cleaning 🐳" },
    { sender: "bot", text: "No sign-up needed. Let’s get you a vacate cleaning quote in under 2 minutes." },
    { sender: "bot", text: "Bonus: We’ve got a seasonal discount running right now! 🐨💸" }
  ])
  const [input, setInput] = useState("")
  const [started, setStarted] = useState(false)

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, { sender: "user", text: input }])
    setInput("")
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: `Cheers! We'll keep going...` }])
    }, 500)
  }

  const startChat = () => {
    setStarted(true)
    setMessages(prev => [...prev, { sender: "bot", text: "What suburb is the property in?" }])
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 font-[Comic_Sans_MS] p-6">
      <Card className="w-full max-w-lg shadow-2xl rounded-2xl border border-blue-100">
        <CardContent className="flex flex-col gap-4 p-6">
          {!started ? (
            <>
              <h1 className="text-3xl font-bold text-blue-800">Hi, I’m Brendan!</h1>
              <p className="text-gray-600">Let’s get your vacate cleaning quote sorted.</p>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl text-sm leading-snug ${
                    msg.sender === "bot" ? "bg-blue-100 text-left self-start" : "bg-green-100 text-right self-end"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <Button
                onClick={startChat}
                className="w-full py-3 text-lg rounded-xl shadow hover:scale-105 active:scale-95 transition-transform"
              >
                Let’s Go
              </Button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-3 max-h-[50vh] overflow-y-auto pr-2">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`px-4 py-2 rounded-lg text-sm ${
                      msg.sender === "bot"
                        ? "bg-blue-100 text-left self-start"
                        : "bg-green-100 text-right self-end"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your reply..."
                  className="flex-1 border px-4 py-2 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Button
                  onClick={sendMessage}
                  className="px-6 py-2 rounded-xl hover:scale-105 active:scale-95 transition-transform"
                >
                  Send
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
