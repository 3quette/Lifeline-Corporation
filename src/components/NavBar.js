import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export class NavBar extends Component {
    state={
        isOpen:false
    } 
    onNavClick=()=>(
        <div>
        <nav><ul className='sidenav'>
         <li style={{textDecoration:"none",listStyle:"none"}}><button id='closebutton' onClick={()=>{this.setState({isOpen:false})}}><img alt='close button' src='\menuIcon.png' width='20px' height='20px'/></button></li>
         <Link to='/Home' className='navbar-items'>
         <li className='navbar-items'>Home</li>
         </Link>
         <Link to='/MyBooking'className='navbar-items'>
         <li className='navbar-items'>My Bookings</li>
         </Link>
         <Link to='/Speciality' className='navbar-items'>
         <li className='navbar-items'>Doctors</li>
         </Link>
         <Link to='/Ambulance'className='navbar-items'>
         <li className='navbar-items'>Ambulances</li>
         </Link>

     </ul></nav>
    </div>
    )
    render() {
        return (
            <div>
              <button id='NavBarOpen' onClick={()=>{this.setState({isOpen:true})}}><img alt='open button' src='\menuIcon.png' width='20px' height='20px'/></button>          
              {this.state.isOpen? this.onNavClick():""}
            </div>
           
        )
    }
}

export default NavBar

