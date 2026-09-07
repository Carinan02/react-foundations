import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import MyMenu from "./MyMenu"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import PageNotFound from "./PageNotFound"
import MyFooter from "./MyFooter"

function AppLayout(){
  return (
    <>
    <MyMenu /> {/**Always display my common meny here */}
    <Outlet /> {/**Display the current route component here, outlet is for the the children routes*/}
    <MyFooter /> {/**Always display my footer here */}
    </>
  )
}
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/contact', element: <Contact />},
      {path: '*', element: <PageNotFound />}
    ]
  }
  
])  

function App() {
  return (
    <RouterProvider router={router}/>
  )

}

export default App
