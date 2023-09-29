import { useState } from 'react'
import { TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from './components/reactFirebase';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
// const twitterProvider = new TwitterAuthProvider()
function App() {
  const [user, setUser] = useState()
  const handleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggInUser = result.user
        console.log(loggInUser);
        setUser(loggInUser)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  // const handleSinginWithTwitter = () => {
  //   signInWithPopup(auth, twitterProvider)
  //     .then(result => {
  //       var loginwithTwitter = result.user
  //       setUser(loginwithTwitter)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }

  return (
    <>
      <h1>Showing Something</h1>
      <button onClick={handleSingIn}>Google Sing in</button>
      <button onClick={handleSinginWithTwitter}>Twitter Sing in</button>
      {user &&
        <div>
          <h1>Name: {user.displayName}</h1>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
          <p>{user.providerId}</p>
        </div>
      }
    </>
  )
}

export default App
