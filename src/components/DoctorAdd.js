import React, { Component } from 'react';
import Axios from 'axios';
import AmbulanceAdd from './AmbulanceAdd';
import DoctorDisplay from './DoctorDisplay';
import NavBar from './NavBar';

export class AdminDr extends Component {
    state={
        firstname:"",
        lastname:"",
        speciality:"",
        time:"",
        hospital:"",
        showAbmbulance:false

    }
handleSubmit= event=>{
    event.preventDefault();
    let body ={
        "firstname": this.state.firstname,
        "lastname": this.state.lastname,
        "speciality": this.state.speciality,
        "hospital":this.state.hospital,
        "time": this.state.time,
       
      };
    
    Axios.post('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/doctor',body)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
  
    alert("Doctor added successfully! Reload required");
        return;
}


    render() {
        return (
            <div>
            <NavBar/>
            <h1 class="heading"> <span>Doctor's</span> info </h1>  
    <table>
        <tr>
            <td>
                <form autocomplete="off" >
                    <div>
                        <label for="doctorCode">First Name</label>
                        <input type="text" name="doctorCode" id="doctorCode" class="Atext" onChange={e=>this.setState({firstname:e.target.value})}/>
                    </div>
                    <div>
                        <label for="doctor">Last Name</label>
                        <input type="text" name="doctor" id="doctor" class="Atext"onChange={e=>this.setState({lastname:e.target.value})}/>
                    </div>
                    <div>
                        <label for="doctorSpec">Doctor's Speciality</label>
                        <input type="text" name="doctorSpec" id="doctorSpec" class="Atext" onChange={e=>this.setState({speciality:e.target.value})}/>
                    </div>
                    <div>
                        <label for="doctorSpec">Hospital</label>
                        <input type="text" name="doctorSpec" id="doctorSpec" class="Atext" onChange={e=>this.setState({hospital:e.target.value})}/>
                    </div>
                    <div>
                        <label for="doctorTime">Doctor's Timimg</label>
                        <input type="datetime-local" name="doctorTime" id="doctorTime" class="Atime" onChange={e=>this.setState({time:e.target.value})}/>
                    </div>
                    <div class="form_action--button">
                        <input type="submit" value="Submit" class="Abtn" onClick={this.handleSubmit}/>
                        <input type="reset" value="Reset" class="Abtn"/>
                    </div>
                </form>
                
            </td>
        </tr>
    </table>
    <div> 
            <center><button class="switch_button" onClick={()=>{ window.open("/AmbulanceAdd"); this.setState({showAbmbulance:true})}}>Switch to Ambulance</button></center>
    <DoctorDisplay/>
    
    </div>


            </div>
        )
    }
}

export default AdminDr
