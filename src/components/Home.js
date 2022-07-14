import React, { Component } from 'react';
import Ambulance from './Ambulance';
import Speciality from './Speciality';
import NavBar from './NavBar';

export class Home extends Component {
  state={
    showAmbulance:false,
    showSpeciality:false,

  }

    render() {
        return (
            <div>
            <NavBar/>
            <section class="home" id="home">
       <div class="image">
           <img src="Doctors.png" alt=""/>
       </div>

       <div class="content">
           <h3> Your health is our first priority </h3>
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
             <img src="doc.jpg" width="500px" height="300px" alt="home"/>
             <div id="FirstSet_txt">
             <button id="ambulance-btn" onClick={()=>{this.setState({showSpeciality:true})}}>View Doctors</button>
            
             </div>
           </div>
          </th>

          <th>
            <div id="FirstSet">
              <img src="ambulance.png" width="500px" height="300px" alt="hhome"/>
              <div id="FirstSet_txt">
                <button id="ambulance-btn" onClick={()=>{this.setState({showAmbulance:true})}}>View Ambulance</button>
              </div>
            </div>
           </th>
        </tr>

    </table>
  {this.state.showAmbulance ? <Ambulance showAmbulance={this.state.showAmbulance} onAmbulanceClose={()=>{this.setState({showAmbulance:false})}}/> :""}
  {this.state.showSpeciality ? <Speciality showSpeciality={this.state.showSpeciality} onDoctorClose={()=>{this.setState({showSpeciality:false})}}/> :""}
  




            </div>
        )
    }
}

export default Home
