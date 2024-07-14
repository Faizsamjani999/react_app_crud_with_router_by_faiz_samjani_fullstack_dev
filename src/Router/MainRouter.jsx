
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp"
import SingleProduct from '../Pages/SingleProduct'
import PrivateRoute from '../Components/PrivateRoute'

function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/product' element={
              <PrivateRoute>
                <Product/>
              </PrivateRoute>
              }></Route>
            <Route path='/product/:id' element={<SingleProduct/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/contact' element={<Contact/>} ></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRouter