import React, { Component } from 'react';
import Axios from 'axios';
import Booking from './Booking';
import NavBar from './NavBar';
export class Cardio extends Component {
    state={
        doctors:[],
        isOpen:false,
        showBooking:false,
        doctorInfo:"",
    }
 
    componentDidMount(){
        Axios.get('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/doctor').then(res=>{
       let temp= [];
       for (const bean of res.data) {
        if(bean.speciality === "Cardiologist"){
            temp.push(bean);
        }
       }
       this.setState({doctors:temp});
    });
    }  
 ondoctorClick(doctorid){
    let doctorInfo = "";
    this.state.doctors.map(doctor=>{
       if(doctor.id === doctorid){
        doctorInfo = (<div id='more_info'>
        <button id='closebutton' onClick={()=>{this.setState({isOpen:false})}}>&times;</button>    
        <center> <div id='doctorFullInfo_head'>Full Information</div></center>
        <div id='more_info_content'><strong>Name:</strong> Dr. {doctor.firstname} {doctor.lastname}<br/><strong>Hospital:</strong> {doctor.hospital}<br/> <strong>Cardio:</strong> {doctor.Cardio} 
        <br/> <strong>Time:</strong> {doctor.time} </div>
       <center> < button style={{border:"white"}} class="btn" value="Loin" type='submit' onClick={()=>{window.open("/Booking"); this.setState({showBooking:true})}}>Schedule Appointment</button></center>
        </div>);
       }
       return doctor;
    });
    
    this.setState({isOpen:true,
        doctorInfo:doctorInfo
    })
    
}

   
    render() {
        return (
            <div >
       <NavBar/>
        <div>
  <section class="home" id="home">
       <div class="image">
           <img src="/doctorsinfo.jpg" alt=""/>
       </div>

       <div class="content">
           <h3> We promise to provide you best doctors </h3>
              <p> A community in which all people achieve their full potential for health and well-being across the lifespan </p>
              <div id="contact">
                
                <button id="button_contact">Contact us </button>
            </div>
       </div>

    </section>

   
    
      <div>
      <div class="sp"><h1><u>Cardiologist</u></h1></div>
      <div id="doctor">
      <ul>
        {this.state.doctors.map(doctor=>( 
        <button id='Doctor' onClick={()=>{this.ondoctorClick(doctor.id)}}><div><li id='doctors'>Doctor Name: Dr.{doctor.firstname}
        <li >Hospital: {doctor.hospital}</li>
        </li></div> </button>
        ))}
        {this.state.isOpen? this.state.doctorInfo:""}
        </ul>
    </div>
    </div>

  </div> 
  
            </div>
           
        )
    }
}

export default Cardio
