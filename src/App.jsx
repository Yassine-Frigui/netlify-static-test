import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const triggerServer = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_VERCEL_SERVER_URL)
      const data = await response.json()
      setMessage(data.message || 'Server triggered successfully')
    } catch (error) {
      setMessage('Error triggering server: ' + error.message)
    }
  }

  return (
    <div className="center">
      <button onClick={triggerServer}>
        Trigger Vercel Server
      </button>
      <p>{message}</p>
    </div>
  )
}

export default App
