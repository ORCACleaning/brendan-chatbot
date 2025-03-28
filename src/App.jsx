import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card.jsx"
import { Button } from "@/components/ui/button.jsx"

export default function App() {
  const [started, setStarted] = useState(false)
  const [messages, setMessages] = useState([
    { sender: "bot", text: "G’day! I’m Brendan from Orca Cleaning 🐳" },
    { sender: "bot", text: "No sign-up needed. Let’s get you a vacate cleaning quote in under 2 minutes." },
    { sender: "bot", text: "Bonus: We’ve got a seasonal discount running right now! 🐨💸" }
  ])

  const startChat = () => {
    if (!started) {
      setStarted(true)
      setMessages(prev => [...prev, { sender: "bot", text: "What suburb is the property in?" }])
    }
  }
  

  return (
    <div className="w-full text-left space-y-4 text-gray-700 px-4">

      <Card className="mx-auto w-full max-w-3xl shadow-2xl rounded-3xl border border-blue-100 p-8 bg-white">
        <CardContent className="flex flex-col items-center gap-6 p-6">
          {/* Brendan's avatar (placeholder) */}
          <div className="w-28 h-28 rounded-full bg-blue-300 flex items-center justify-center text-white text-3xl shadow-md">
  🧼
          </div>


          {/* Intro text */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-blue-800">Hi, I’m Brendan!</h1>
            <p className="text-lg text-gray-700">Let’s get your vacate cleaning quote sorted.</p>
          </div>

          {/* Message preview */}
          <div className="w-full text-left space-y-2 text-gray-600">
            {messages.map((msg, i) => (
              <p key={i} className="text-base leading-relaxed">{msg.text}</p>
            ))}
          </div>

          {/* CTA button */}
          <Button
  onClick={startChat}
  className="mt-4 w-full py-5 text-lg font-bold rounded-xl bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
>
  Let’s Go
</Button>

          
        </CardContent>
      </Card>
    </div>
  )
}
