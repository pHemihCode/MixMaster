import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import About from './pages/About'
import Newsletter from './pages/Newsletter'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Error from './pages/Error'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<NavBar />}>
      <Route index element={<Home />}  errorElement={<Error />}/>
      <Route path='about' element={<About />} />
      <Route path='newsletter' element={<Newsletter />} />
      <Route path=':id' element={<Detail />} />
    </Route>
  )
)
function App() {
   return(
    <RouterProvider router={router} />
   )
}

export default App
