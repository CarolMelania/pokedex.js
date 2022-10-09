import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {Dashboard, enter} from '@/pages'
import {createContext} from '../context/createContext'

const createRoutes = () => {
  const { isAuth } = useContext(createContext)

  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/enter' element={<enter />} />
      <Route
        path='/dashboard'
        element={isAuth ? <Dashboard /> : <Navigate to='/login' replace />}
      />
    </Routes>

  )
}
export default createRoutes