import React from 'react';

import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Myappointments from './pages/Myappointments';
import Myprofile from './pages/Myprofile';
import Doctors from './pages/Doctors';
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctor' element={<Doctors/>}/>
        <Route path='/doctor/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<Myprofile/>}/>
        <Route path='/my-appointments' element={<Myappointments/>}/>
        <Route path='/appointment/:docid' element={<Myappointments/>}/>

        
      </Routes>
    </div>
  )
}

export default App