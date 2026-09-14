import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import MyMenu from './MyMenu'
import Home from './Home'
import Books from './Books'
import Films from './Films'
import DataProvider from './DataProvider'
import MoreStuff from './MoreStuff'
import PageNotFound from './PageNotFound'
import './App.css'

const books = DataProvider.getAllBooks()
const films = DataProvider.getAllFilms()

function AppLayout(){
  return(
    <>
    <MyMenu />
    <Outlet/>
    </>
  )
}

const routes = createBrowserRouter([
  {element: <AppLayout />, children: [
  {path : '/', element : <Home/>},
  {path : '/books', element : <Books books = {books} format='TABLE'/>},
  {path : '/films', element : <Films films = {films} format='LIST'/>},
  {path : '/moreStuff', element: <MoreStuff books ={books} films = {films} /> },
  {path : '*', element : <PageNotFound />}
  ]}
])
function App() {
 
  return (
   <RouterProvider router = {routes} />
  )
}

export default App
