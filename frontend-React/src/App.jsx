import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './ui_components/AppLayout'
import Homepage from '../src/pages/Homepage'
import Detailpage from '../src/pages/Detailpage'
import Aboutpage from '../src/pages/Aboutpage'
import Projectpage from '../src/pages/Projectpage'
import Contactpage from '../src/pages/Contactpage'
import ScrollToTop from './ui_components/ScrollToTop'
import Createpost from './ui_components/Createpost'
import Adminpage from '../src/pages/Adminpage'
import Notfound from './ui_components/Notfound'






const App = () => {

  return (
    <>
      <BrowserRouter>
          <ScrollToTop/>
          <Routes>
              <Route path='/' element={<AppLayout/>}>
                  <Route index element={<Homepage/>}/>
                  <Route path="/posts/:postid" element={<Detailpage/>} />
                  <Route path='about' element={<Aboutpage/>}/>
                  <Route path='activities' element={<Projectpage/>}/>
                  <Route path='contact' element={<Contactpage/>}/>
                  <Route path='create' element={<Createpost/>}/>
                  <Route path='signin' element={<Adminpage/>}/>

                  {/*Catch all routes for undefined paths */}
                  <Route path="*" element={<Notfound/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App