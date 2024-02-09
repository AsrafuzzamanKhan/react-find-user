import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const LazyRoots = React.lazy(() => import('./Root/Root'));
const LazyHome = React.lazy(() => import('./components/Home/Home'));
const LazyUserDetails = React.lazy(() => import('./components/UserDetails/UserDetails'));
const LazySearchUser = React.lazy(() => import('./components/Search/SearchUser'));
// import Home from './components/Home/Home';
// import UserDetails from './components/UserDetails/UserDetails';

// import SearchUser from './components/Search/SearchUser';
import UserList from './components/UserList/UserList';
import Loader from './Loader/Loader';


const router = createBrowserRouter([
  {
    path: "/",
    element: <React.Suspense fallback={<Loader />}><LazyRoots></LazyRoots></React.Suspense>,
    children: [
      {
        path: '/',
        element: <React.Suspense fallback={<Loader />}><LazyHome /></React.Suspense>
      },
      {
        path: '/userDetails/:id',
        element: <React.Suspense fallback={<Loader />}><LazyUserDetails /></React.Suspense>
      },
      {
        path: '/search',
        element: <React.Suspense fallback={<Loader />}><LazySearchUser /></React.Suspense>
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
