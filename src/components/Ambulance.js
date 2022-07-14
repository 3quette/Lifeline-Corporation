import React, { Component } from 'react';
import Axios from 'axios';
import NavBar from './NavBar';
export class Ambulance extends Component {
    state={
        ambulances:[],
        isOpen:false,
        ambulanceInfo:"",
        showAmbulance:true
    }
    componentDidMount(){
        Axios.get('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/ambulance').then(res=>{
        console.log(res);
        this.setState({ambulances: res.data});
    });
    } 

    render() {
        return (
            <div>
                <NavBar/>
        <button id='closebutton' onClick={()=>{this.props.onAmbulanceClose();}}><i class="icon-collapse"></i>&times;</button>  
      
      {this.state.showAmbulance ? 
        <div>
<section class="home" id="home">
       <div class="image">
           <img src="ambulance'infon.jpg" alt=""/>
       </div>
       <div class="content">
           <h3> Ambulances at your service </h3>
              <p> A community in which all people achieve their full potential for health and well-being across the lifespan </p>
              <div id="contact">
                
                <button id="button_contact">Contact us </button>
            </div>
       </div>

    </section>

  
    <center>  <div id="Ambulance">
      <div>
      <ul>
        {this.state.ambulances.map(ambulance=>( 
        <button id='info_button' onClick={()=>{this.onambulanceClick(ambulance.id)}}><div><li id='ambulances'>Category: {ambulance.category}
        <li >Contact Number: {ambulance.number}</li>
        <li >Charges: {ambulance.charges}</li>
        </li></div> </button>
        ))}
        {this.state.isOpen? this.state.ambulanceInfo:""}
        </ul>
    </div>
    </div></center>
  </div>  :""}
            </div>
        )
    }
}

export default Ambulance
