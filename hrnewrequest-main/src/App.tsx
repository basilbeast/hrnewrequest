import { Routes, Route } from "react-router-dom"
import Approvals from './pages/Approvals'
import Home from './pages/Home'
import Extension from "./pages/Extension"
import Email from "./pages/Email"
import MC from "./pages/MC"
import NewForm from './pages/NewForm'
import NewUser from "./pages/UserAccount"
import Opera from "./pages/Opera"
import PCusers from './pages/PCusers'
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Approvals" element={<Approvals/>}/>
        <Route path="/Email" element={<Email/>}/>
        <Route path="/Extension" element={<Extension/>}/>
        <Route path="/MC" element={<MC/>}/>
        <Route path="/NewForm" element={<NewForm/>}/>
        <Route path="/NewUser" element={<NewUser/>}/>
        <Route path="/Opera" element={<Opera/>}/>
        <Route path="/PCusers" element={<PCusers/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </>
  )
}

export default App
