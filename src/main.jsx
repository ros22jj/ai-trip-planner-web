// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import CreateTrip from './create-trip/index.jsx'
// import Header from './components/custom/Header.jsx'
// import { Toaster } from './components/ui/sonner'
// import { GoogleOAuthProvider } from '@react-oauth/google'
// // import { Toaster } from 'sonner'




// const router= createBrowserRouter(
//   [
//     {
//       path :'/',
//       element:<App />
//     },
//     {
//       path :'/create-trip',
//       element:<CreateTrip />
//     }
//   ]
// )
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}></GoogleOAuthProvider>
//     <Header />
//     <Toaster/>
//     <RouterProvider router ={router} />
//     <GoogleOAuthProvider clientId="<your_client_id>"></GoogleOAuthProvider>
//   </StrictMode>,
// )


















// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import CreateTrip from './create-trip/index.jsx'
// import Header from './components/custom/Header.jsx'
// import { Toaster } from './components/ui/sonner'
// import { GoogleOAuthProvider } from '@react-oauth/google'
// import Viewtrip from './view-trip/[tripId]'

// // 1. Define your Routes
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/create-trip',
//     element: <CreateTrip />
//   }

// ,

// {
//     path: '/view-trip/:tripId',
//     element: <Viewtrip />
//   }




// ]);

// // 2. Render the App
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* The Provider MUST wrap all components that use Google Auth */}
//     <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
//       <Header />
//       <Toaster />
//       <RouterProvider router={router} />
//     </GoogleOAuthProvider>
//   </StrictMode>
// );















import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import { Toaster } from './components/ui/sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripId]'

import MyTrips from './my-trips/index.jsx'

// ✅ Layout Component
function Layout() {
  return (
    <>
      <Header />
      <Toaster />
      <Outlet />
    </>
  )
}

// ✅ Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,  // Wrap everything inside layout
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/create-trip',
        element: <CreateTrip />
      },
      {
        path: '/view-trip/:tripId',
        element: <Viewtrip />
      },
      {
        path :'/my-trips',
        element :<MyTrips/>
      }
    ]
  }
]);

// ✅ Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
