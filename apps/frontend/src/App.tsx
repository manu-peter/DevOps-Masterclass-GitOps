import { useState, useEffect } from 'react'
import Greeting from './components/Greeting.tsx'

function App() {
  const [backendMessage, setBackendMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://backend:8080/api/hello')
      .then(res => res.text())
      .then(setBackendMessage)
      .catch(() => setBackendMessage('Backend not reachable'))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        GitOps Demo Frontend
      </h1>
      
      <Greeting name="Manu" />
      
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Backend Response:</h2>
        <p className="text-lg text-gray-700 break-all">{backendMessage}</p>
      </div>
    </div>
  )
}

export default App
