import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyApC2tSKM_ucs3LYh1Rz22DWqyTjxYGFqk",
  authDomain: "sola-83790.firebaseapp.com",
  projectId: "sola-83790",
  storageBucket: "sola-83790.firebasestorage.app",
  messagingSenderId: "446901550503",
  appId: "1:446901550503:web:39f1ce3abe414f8ca48a82",
  measurementId: "G-WV0N9S3WHP"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }