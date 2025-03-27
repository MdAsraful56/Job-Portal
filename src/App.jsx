import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Login from './Pages/AuthPages/Login'
import Register from './Pages/AuthPages/Register'



function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout/> }>
        <Route index element={ <Home/> } />
        <Route path='login' element={ <Login /> } />
        <Route path='register' element={ <Register /> } />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
