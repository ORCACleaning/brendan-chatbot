import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card.jsx"
import { Button } from "@/components/ui/button.jsx"

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
    // Simulated Brendan reply
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: `Thanks! (Pretend logic goes here...)` }])
    }, 500)
  }

  const startChat = () => {
    setStarted(true)
    setMessages(prev => [...prev, { sender: "bot", text: "What suburb is the property in?" }])
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 p-4">
      <Card className="w-full max-w-xl shadow-xl border-2 border-blue-100">
        <CardContent className="flex flex-col gap-4 p-6">
          {!started ? (
            <>
              <h1 className="text-2xl font-bold">Hi, I’m Brendan!</h1>
              <p>Let’s get your vacate cleaning quote sorted.</p>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl max-w-[80%] ${
                    msg.sender === "bot" ? "bg-blue-100 self-start" : "bg-green-100 self-end"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <Button onClick={startChat}>Let’s Go</Button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`px-4 py-2 rounded-lg ${
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
                  className="flex-1 border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
                <Button onClick={sendMessage}>Send</Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
