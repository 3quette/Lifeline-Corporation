import React, { Component } from 'react'
import Axios from 'axios';

export class DoctorEdit extends Component {
    state={
        firstname:"",
        lastname:"",
        speciality:"",
        hospital:"",
        time:[]

    }
handleSubmit= event=>{
    event.preventDefault();
    let body ={
        "firstname": this.state.firstname,
        "lastname": this.state.lastname,
        "speciality": this.state.speciality,
        "hospital":this.state.hospital,
        "time":this.state.time
      };
    
      Axios.put(`http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/doctor/${this.props.id}`,body)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
    alert("Doctor updated successfully! Reload required");
    return;
}
componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    if(nextProps){
    this.setState({firstname:nextProps.firstname, lastname:nextProps.lastname, speciality:nextProps.speciality, hospital:nextProps.hospital, time:nextProps.time});
    console.log("firstname: "+this.state.firstname+"lastname: "+this.state.lastname+"speciality: "+this.state.speciality);}
}


    render() {
        const { onClose, isOpen } = this.props;
        console.log("isOpen: "+isOpen);
        const {lastname} = this.state;
        return (
            <div>
             {isOpen ?   <form>
                <div id='more_info'>
                <button id='closebutton' style={{marginLeft:'200px'}}  onClick={onClose}>&times;</button>
                <center> <div id='carFullInfo_head'>Edit Info</div></center>
                   <label  id='more_info_content'>
                        First Name:
                        <input type='text' value={this.state.firstname} onChange={e=>{this.setState({firstname:e.target.value})}}></input>
                    </label><br/>
                    <label  id='more_info_content'>
                        Last Name:
                        <input type='text' value={lastname} onChange={e=>{this.setState({lastname:e.target.value})}}></input>
                    </label><br/>
                    <label  id='more_info_content'>
                        Speciality:
                        <input type='text' value={this.state.speciality} onChange={e=>{this.setState({speciality:e.target.value})}}></input>
                    </label><br/>
                    <label  id='more_info_content'>
                        Hospital:
                        <input type='text' value={this.state.hospital} onChange={e=>{this.setState({hospital:e.target.value})}}></input>
                    </label><br/>
                    <label  id='more_info_content'>
                        Time:
                        <input type='text' value={this.state.time} onChange={e=>{this.setState({time:e.target.value})}}></input>
                    </label><br/>
                    <button id="crud_btn" type='submit' onClick={this.handleSubmit}>Update</button>
                    </div>
                </form>:""}
                </div>
        )
    }
}

export default DoctorEdit