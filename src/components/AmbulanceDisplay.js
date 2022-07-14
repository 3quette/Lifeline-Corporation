import React, { Component } from 'react';
import Axios from 'axios';
import AmbulanceEdit from './AmbulanceEdit';
import AmbulanceDelete from './AmbulanceDelete';

export class AmbulanceDisplay extends Component {
    state={
        id:"",
        ambulances:[],
        isOpen:false,
        ambulanceInfo:"",
        showAmbulance:true,
        category:"",
        number:"",
        charges:"",
    }
    componentDidMount(){
        Axios.get('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/ambulance').then(res=>{
        console.log(res);
        this.setState({ambulances: res.data});
    });
    } 
    UpdateState=(ID,CATEGORY,NUMBER,CHARGES)=>{
        this.setState({id:ID, category: CATEGORY, number: NUMBER, charges: CHARGES,isOpen: true });
    }
    UpdateDeleteState=(ID)=>{
        this.setState({id:ID });
    }
    render() {
        return (
            <div>o
    <center>  <div id="Ambulance">
      <div>
      <ul>
        {this.state.ambulances.map(ambulance=>( 
        <button id='info_button' onClick={()=>{this.UpdateDeleteState(ambulance.id)}}><div><li id='ambulances'>Category: {ambulance.category}
        <li >Contact Number: {ambulance.number}</li>
        <li >Charges: {ambulance.charges}</li>
        <li><button id="crud_btn" onClick={()=>{this.UpdateState(ambulance.id,ambulance.category,ambulance.number,ambulance.charges)}}>Edit</button></li>
        </li></div> </button>
        ))}
        {this.state.isOpen? this.state.ambulanceInfo:""}
        </ul>
        <AmbulanceEdit onClose={() => { this.setState({ isOpen: false }) }} isOpen={this.state.isOpen} id={this.state.id}  category={this.state.category} number={this.state.number} charges={this.state.charges} />
        <AmbulanceDelete id={this.state.id}/>
    </div>
    </div></center>

            </div>
        )
    }
}

export default AmbulanceDisplay
