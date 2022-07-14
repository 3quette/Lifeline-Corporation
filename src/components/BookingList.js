import React, { Component } from 'react';
import Axios from 'axios';
import NavBar from './NavBar';
export class BookingList extends Component {
 state={
     appointments:[]
 }
 componentDidMount(){
    Axios.get('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/Booking').then(res=>{
    console.log(res);
    this.setState({appointments: res.data});
});
} 
    render() {
        return (
            <div>
         <NavBar/>
         <img class="wave" src="/wave.png" alt="wave"/>
    <div class="container">
        <div class="img">
            <img src="/Doctors.png" alt="dr"/>
        </div>
        <div class="schedule_container" >
        <div id='appoin_info_head'>
     Schedules
    </div>
     <center>  <div id="appointment">
      <div>
      <img src="/Avatar.png" width="10%" height="10%" alt="avtr"/>
      <ul>
        {this.state.appointments.map(appointment=>( 
        <button id='app_info_button' ><div><li id='appointments'>Dr. Name: {appointment.doctorname}
        <li >Scheduled on: {appointment.time}</li>
        </li></div> </button>
        ))}
        </ul>
    </div>
    </div></center>
        </div>
    </div>
</div>   

        )
    }
}

export default BookingList
