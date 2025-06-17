import { Routes, Route, useNavigate } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './features/Home/pages/Home'
import Login from './features/authentication/pages/Login'
import Signup from './features/authentication/pages/Signup'
import useIsOnline from './hooks/useIsOnline'
import { useAuth } from './context/AuthProvider'

function App() {
  const isOnline=useIsOnline();

  return (
    <>
      <h1>{isOnline ? "online" : "offline"}</h1>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home />}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
