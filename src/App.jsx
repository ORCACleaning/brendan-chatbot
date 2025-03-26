import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function App() {
  const [started, setStarted] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-sky-50 p-4 text-gray-900">
      {!started ? (
        <Card className="max-w-xl w-full shadow-lg rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://i.imgur.com/k8HfSdp.png"
                alt="Brendan"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">Hi, I’m Brendan!</h1>
                <p className="text-gray-600 text-sm">Let’s get your vacate cleaning quote sorted.</p>
              </div>
            </div>
            <div className="text-gray-800 text-base leading-relaxed">
              G’day! I’m Brendan from Orca Cleaning 🐳  
              <br />
              No sign-up needed. Let’s get you a vacate cleaning quote in under 2 minutes.
              <br />
              Bonus: We’ve got a seasonal discount running right now! 💸
            </div>
            <Button onClick={() => setStarted(true)} className="w-full">
              Let’s Go
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="text-center mt-10 text-xl text-gray-700">
          {/* First question placeholder */}
          What suburb is the property in?
        </div>
      )}
    </div>
  )
}

export default App
