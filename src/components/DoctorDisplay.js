import React, { Component } from 'react';
import Axios from 'axios';
import DoctorEdit from './DoctorEdit';
import DoctorDelete from './DoctorDelete';

export class DoctorDisplay extends Component {
    state={
        id:"",
        doctors:[],
        isOpen:false,
        doctorInfo:"",
        firstname:"",
        lastname:"",
        hospital:"",
        speciality:"",
        time:[]
    }
    componentDidMount(){
        Axios.get('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/doctor').then(res=>{
        console.log(res);
        this.setState({doctors: res.data});
    });
    } 
    UpdateState=(ID,FNAME,LNAME,TIME,HOSPITAL,SPEC)=>{
        this.setState({id:ID, firstname: FNAME, lastname: LNAME, time: TIME, hospital:HOSPITAL, speciality:SPEC,isOpen: true });
    }
    UpdateDeleteState=(ID)=>{
        this.setState({id:ID });
    }
    
    render() {
        return (
            <div>
    <center>  <div id="Ambulance">
      <div>
          
      <ul>
        {this.state.doctors.map(doctor=>( 
        <button id='info_button' onClick={()=>{this.UpdateDeleteState(doctor.id)}}><div><li id='doctors'>First Name: {doctor.firstname}
        <li >Last Name: {doctor.lastname}</li>
        <li >Speciality: {doctor.speciality}</li>
        <li >Hospital: {doctor.hospital}</li>
        <li><button id="crud_btn" onClick={()=>{this.UpdateState(doctor.id,doctor.firstname,doctor.lastname,doctor.speciality,doctor.hospital)}}>Edit</button></li>
      
        </li></div> </button>
        ))}
        {this.state.isOpen? this.state.doctorInfo:""}
        </ul>
         <DoctorEdit onClose={() => { this.setState({ isOpen: false }) }} isOpen={this.state.isOpen} id={this.state.id}  firstname={this.state.firstname} lastname={this.state.lastname}
          hospital={this.state.hospital} speciality={this.state.speciality} time={this.state.time}/>
        <DoctorDelete id={this.state.id}/>
    </div>
    </div></center>

            </div>
        )
    }
}

export default DoctorDisplay
