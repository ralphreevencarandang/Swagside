
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './root/pages/HomePage'
import RootLayout from './root/RootLayout'
import AuthLayout from './_auth/AuthLayout'
import Signup from './_auth/forms/Signup'
import Signin from './_auth/forms/Signin'
import About from './root/pages/About'
import Collection from './root/pages/Collection'
import Contact from './root/pages/Contact'
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
            </Route>


          </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App
