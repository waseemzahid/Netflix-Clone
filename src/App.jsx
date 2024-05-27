import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Player from "./pages/Player/Player"
import { Routes, Route, useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "./firebase"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopRated from "./pages/TopRated/TopRated"
import Popular from "./pages/Popular/Popular"
import Upcoming from "./pages/Upcoming/Upcoming"
import Latest from "./pages/Latest/Latest"
import TopPicks from "./pages/TopPicks/TopPicks"

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if(user){
        // console.log("Logged In");
        navigate('/')
      }else{
        // console.log("Logged Out");
        navigate('/login')
      }
    })
  }, [])
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/top_picks_for_you" element={<TopPicks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  )
}

export default App