import './App.css'
import { useState } from 'react'
import { auth } from './firebase'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="home-page">
      <div className="left-side-column"></div>
      <div className="right-side-column"></div>

      <div className="connect-wrapper">
        <div className="connect-line"></div>

        <div className="connect-sign">
          <h1>AlaSolis</h1>
        </div>
      </div>

      <div className="login-box">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  )
}

export default App