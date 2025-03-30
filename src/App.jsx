import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Login from './Pages/AuthPages/Login'
import Register from './Pages/AuthPages/Register'
import AuthProvider from './Contexts/AuthContext/AuthProvider'
import Blog from './Pages/Blog/Blog'
import JobDetails from './Pages/JobDetails/JobDetails'



function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout/> }>
        <Route index element={ <Home/> } />
        <Route path='/jobs/:id' element={ <JobDetails /> } loader={ ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)  } />
        <Route path='blog' element={ <Blog /> } />
        <Route path='login' element={ <Login /> } />
        <Route path='register' element={ <Register /> } />
      </Route>
    )
  )


  return (
    <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </>
  )
}

export default App
