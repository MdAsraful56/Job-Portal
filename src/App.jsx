import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Login from './Pages/AuthPages/Login'
import Register from './Pages/AuthPages/Register'
import AuthProvider from './Contexts/AuthContext/AuthProvider'
import Blog from './Pages/Blog/Blog'
import JobDetails from './Pages/JobDetails/JobDetails'
import PrivateRoute from './Route/PrivateRoute'
import JobApply from './Pages/JobApply/JobApply'
import MyApplications from './Pages/MyApplication/MyApplications'
import AddJobs from './Pages/AddJobs/AddJobs'
import MyPostedJobs from './Pages/AddJobs/MyPostedJobs'
import AllJobs from './Pages/AddJobs/AllJobs'
import AddBlog from './Pages/Blog/AddBlog'



function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout/> }>
        <Route index element={ <Home/> } />
        <Route path='jobs/:id' element={ <PrivateRoute><JobDetails /></PrivateRoute> } loader={ ({params}) => fetch(`https://job-protal-server-indol.vercel.app/jobs/${params.id}`)  } />
        <Route path='jobApply/:id' element={ <PrivateRoute><JobApply /></PrivateRoute> } />
        <Route path='jobApplication' element={ <PrivateRoute><MyApplications /></PrivateRoute> } />
        <Route path='addJob' element={ <PrivateRoute><AddJobs /></PrivateRoute> } />
        {/* <Route path='mypostedjobs' element={ <PrivateRoute><MyPostedJobs /></PrivateRoute> } /> */}
        <Route path='alljobs' element={ <PrivateRoute><AllJobs /></PrivateRoute> } />
        <Route path='blog' element={ <Blog /> }  loader={ () => fetch('https://job-protal-server-indol.vercel.app/blogs') } />
        <Route path='addBlog' element={ <PrivateRoute><AddBlog /></PrivateRoute> } />
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
