import React, { Component } from 'react';
import Axios from 'axios';
import Cardio from './Cardio';
import NavBar from './NavBar';
export class Speciality extends Component {
    state={
        doctors:[],
        isOpen:false,
        doctorInfo:"",
        showSpeciality:true,
        showCardio:false,
    }
 
    componentDidMount(){
        Axios.get('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/doctor').then(res=>{
        console.log(res);
        this.setState({ambulances: res.data});
    });
    }  
 ondoctorClick(doctorid){
    let doctorInfo = "";
    this.state.doctors.map(doctor=>{
       if(doctor.id === doctorid){
        doctorInfo = (<div id='more_info'>
        <button id='closebutton' onClick={()=>{this.setState({isOpen:false})}}>&times;</button>    
        <center> <div id='doctorFullInfo_head'>Full Information</div></center>
        <div id='more_info_content'><strong>Name:</strong> Dr. {doctor.firstname} {doctor.lastname}<br/><strong>Hospital:</strong> {doctor.hospital}<br/> <strong>Speciality:</strong> {doctor.speciality} 
        <br/> <strong>Time:</strong> {doctor.time} </div>
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
        <button id='closebutton' onClick={()=>{this.props.onDoctorClose();}}><i class="icon-collapse"></i>&times;</button>  
      
      {this.state.showSpeciality ? 
        <div>
   <section class="home" id="home">
       <div class="image">
           <img src="/Doctors.png" alt=""/>
       </div>

       <div class="content">
           <h3> Providing the Best Specialist</h3>
              <p> A community in which all people achieve their full potential for health and well-being across the lifespan </p>
              <div id="contact">
                
                <button id="button_contact">Contact us </button>
            </div>
       </div>

    </section>

    <table>
        <tr>
          <th>
           <div id="FirstSet">
             <img src="cardiologist.jpg" width="500px" height="300px" alt="cardio"/>
             <div id="Doctor">            
              <button id="button_remove" onClick={()=>{
                    window.open("/cardio");
                    this.setState({showCardio:true})}}>cardiologist</button>
          </div>
           </div>
          </th>

          <th>
            <div id="FirstSet">
              <img src="/ent.jpg" width="500px" height="300px" alt="ent"/>
              <div id="Doctor">
                          
                <button id="button_remove">ENT</button>
            </div>
            </div>
           </th>
        </tr>


        <tr>
          <th>
           <div id="FirstSet">
             <img src="/chest.jpg" width="500px" height="300px" alt='chest'/>
             <div id="Doctor">
             <button id="button_remove" onClick={()=>{
                    window.open("/Chest");
                    this.setState({showCardio:true})}}>Chest Specialist</button>
          </div>
           </div>
          </th>
          </tr>
                
    </table>
 
  </div>  :""}
 
            </div>
           
        
        )
    }
}

export default Speciality
