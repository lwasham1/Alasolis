import './App.css'
import { useState } from 'react'
import { auth } from './firebase'
import  SignUp  from './signUp.jsx'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSignUp, setShowSignUp] = useState(false)

  const provider = new GoogleAuthProvider()

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log('Google user:', user)
      alert(`Signed in as ${user.displayName || user.email}`)
    } catch (error) {
      console.error('Google sign-in error:', error)
      alert(error.message)
    }
  }
const handleSignUp = () => {
    try {
      setShowSignUp(true)
    } catch (error) {
      console.error(error)
    }
  }

  if(showSignUp){
    return <SignUp />
  }
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
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignUp}>
          Sign Up
        </button>

        <button onClick={handleGoogleSignIn}>
          Sign In with Google
        </button>
      </div>
    </div>
  )
}

export default App