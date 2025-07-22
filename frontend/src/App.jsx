
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './root/pages/HomePage'
import RootLayout from './root/RootLayout'
function App() {


  return (
    <main>
        <BrowserRouter>
          <Routes>

            {/* Protected Routes */}



            {/* Public Routes Routes */}
            <Route element={<RootLayout/>}>
                <Route path='/' element={<HomePage/>}/>
            </Route>


          </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App
