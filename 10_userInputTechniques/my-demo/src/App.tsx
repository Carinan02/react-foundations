import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './Header'
import Dom from './Dom'
import Uncontrolled from './Uncontrolled'
import Controlled from './Controlled'

function AppLayout(){
  return(
    <>
    <Header />
    <Outlet />
    
    </>
  )
}

const routes = createBrowserRouter([
  {
    element : <AppLayout />, 
    children : [
    {path : '/dom', element: <Dom />},
    {path : '/controlled', element: <Controlled />},
    {path : '/uncontrolled', element: <Uncontrolled />},
    {path : '*', element: <><h1>Not Found!</h1></>}
    ]
}
])



function App() {
 

  return (
    <RouterProvider router = {routes}/>
  )
}

export default App
