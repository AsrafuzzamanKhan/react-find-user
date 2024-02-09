import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const LazyRoots = React.lazy(() => import('./Root/Root'));
import Home from './components/Home/Home';
import UserDetails from './components/UserDetails/UserDetails';

import SearchUser from './components/Search/SearchUser';
import UserList from './components/UserList/UserList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <React.Suspense fallback="Loading..."><LazyRoots></LazyRoots></React.Suspense>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/userDetails/:id',
        element: <UserDetails />
      },
      {
        path: '/search',
        element: <SearchUser />
      }
      ,
      {
        path: '/userList',
        element: <UserList />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />


  </React.StrictMode>,
)
