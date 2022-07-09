import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Explore from './pages/Explore.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import Offers from './pages/Offers.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
        <Navbar />
      </Router>
    </>
  )
}

export default App
