import React from 'react';
import './components/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from './components/Header';
import Footer from'./components/Footer';
import Cardio from'./components/Cardio';
import Chest from'./components/Chest';
import Booking from'./components/Booking';
import BookingList from'./components/BookingList';
import Ambulance from'./components/Ambulance';
import Speciality from'./components/Speciality';
import SignIn from'./components/SignIn';
import Login from'./components/Login';
import DoctorAdd from'./components/DoctorAdd';
import AmbulanceAdd from'./components/AmbulanceAdd';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path='/AmbulanceAdd' element={<AmbulanceAdd/>}></Route>
      <Route path='/SignIn' element={<SignIn />}></Route>
      <Route path='/DoctorAdd' element={<DoctorAdd />}></Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='/Home'  exact element={<Home />}></Route>
      <Route path='/Booking' element={<Booking />}></Route>
      <Route path='/MyBooking' element={<BookingList />}></Route>
      <Route path='/Speciality' element={<Speciality />}></Route>
      <Route path='/Ambulance' element={<Ambulance />}></Route>
      <Route path='/Cardio' element={<Cardio />}></Route>
      <Route path='/Chest' element={<Chest />}></Route>
      <Route path='/Admin' element={<DoctorAdd />}></Route>

      </Routes>
      </BrowserRouter>
      <Footer/>
      


    </div>
  );
}

export default App;
