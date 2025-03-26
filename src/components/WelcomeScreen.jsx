import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function WelcomeScreen({ onStart }) {
  return (
    <Card className="max-w-xl mx-auto mt-10 shadow-xl rounded-2xl">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.imgur.com/k8HfSdp.png"
            alt="Brendan"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Hi, I’m Brendan!</h2>
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
        <Button onClick={onStart} className="w-full">Let’s Go</Button>
      </CardContent>
    </Card>
  )
}
