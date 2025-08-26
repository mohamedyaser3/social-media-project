
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AuthLayout from './Layouts/AuthLayout'
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import MainLayout from './Layouts/MainLayout';
import FeedPage from './Pages/FeedPage';
import PostDetailsPage from './Pages/PostDetailsPage';
import ProfilePage from './Pages/ProfilePage';
import NotFoundPage from './Pages/NotFoundPage';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import ProtectedAuthRoute from './ProtectedRoutes/ProtectedAuthRoute';

const router = createBrowserRouter([
  {path: "", element:<AuthLayout/>, children:[
    {path:'login', element:<ProtectedAuthRoute><LoginPage/></ProtectedAuthRoute> },
    {path:'register', element:<ProtectedAuthRoute><RegisterPage/></ProtectedAuthRoute>}
  ]},
  {path: '', element: <MainLayout/>, children:[
    {index:true, element: <ProtectedRoutes><FeedPage/></ProtectedRoutes> },
    {path: 'post-details/:id', element: <ProtectedRoutes><PostDetailsPage/></ProtectedRoutes>},
    {path: 'profile/:id',element: <ProtectedRoutes><ProfilePage/></ProtectedRoutes>},
    {path: "*", element:<NotFoundPage/>}
  ]}
])

function App() {
  

  return (
    <>
    
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
