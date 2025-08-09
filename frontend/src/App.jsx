
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './root/pages/HomePage'
import RootLayout from './root/RootLayout'
import AuthLayout from './_auth/AuthLayout'
import Signup from './_auth/forms/Signup'
import Signin from './_auth/forms/Signin'
import About from './root/pages/About'
import Collection from './root/pages/Collection'
import Contact from './root/pages/Contact'
import AdminLayout from './admin/AdminLayout'
import CreateProduct from './admin/Pages/CreateProduct'
import ProductList from './admin/Pages/ProductList'
import Orders from './admin/Pages/Orders'
import EditProduct from './admin/Pages/EditProduct'
import AdminLogin from './admin/Pages/AdminLogin'
import Product from './root/pages/Product'
import Cart from './root/pages/Cart'
import PlaceOrder from './root/pages/PlaceOrder'
function App() {


  return (
    <main>
        <BrowserRouter>
          <Routes>

            {/* Public Routes */}
            <Route element={<AuthLayout/>}>
                <Route path='/sign-up' element={<Signup/>}/>
                <Route path='/sign-in' element={<Signin/>}/>
            </Route>



            {/*Protected  Routes Routes */}
            <Route element={<RootLayout/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/collection' element={<Collection/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/product/:id' element={<Product/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/place-order' element={<PlaceOrder/>}/>
            </Route>

            {/* Admin Routes */}

            
            <Route path='/adminLogin' element={<AdminLogin/>}/>

            <Route element={<AdminLayout/>}>
              <Route path='/add-product' element={<CreateProduct/>}/>
              <Route path='/products' element={<ProductList/>}/>
              <Route path='/orders' element={<Orders/>}/>
              <Route path='/editProduct/:id' element={<EditProduct/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App
