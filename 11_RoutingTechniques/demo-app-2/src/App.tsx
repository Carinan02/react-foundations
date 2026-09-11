import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import MyMenu from "./MyMenu"
import Home from "./Home"
import Products from "./Products"
import Contact from "./Contact"
import PageNotFound from "./PageNotFound"
import MyFooter from "./MyFooter"

import Product from "./ProductV1"
import ProductV2_useNavigate from "./ProductV2_useNavigate"

import ProductNestedRoute from "./ProductNestedRoute"
import ProductSummary from "./ProductSummary"

function AppLayout(){
  return (
    <>
    <MyMenu /> {/**Always display my common meny here */}
    <hr />
    <Outlet /> {/**Display the current route component here, outlet is for the the children routes*/}
    <MyFooter /> {/**Always display my footer here */}
    </>
  )
}

function ProductWithNestedRoutes(){
  return(
    <>
    <ProductNestedRoute />
    <hr />
    <Outlet />
    </>
  )
}

function ProductUnselected(){
  return(
    <h1>No product selected</h1>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {path: '/', element: <Home />},
      /**Demonstrate how to define parameterized routes */
      {path: '/products', element: <Products />},
      {path: '/product/:id', element: <ProductV2_useNavigate />},

      /*Demonstrate how to define nested routes */

      {path : '/products-with-nested-routes', element: <ProductWithNestedRoutes />,
      children : [
        {index: true, element : <ProductUnselected />},
        {path : ':id', element : <Product />},
        {path : 'summary',  element: <ProductSummary />} 
      ]},

      {path: '/contact', element: <Contact />},
      {path: '*', element: <PageNotFound />},

    ]
  }
  
])  

function App() {
  return (
    <RouterProvider router={router}/>
  )

}

export default App
