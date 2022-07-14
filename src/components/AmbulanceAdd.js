import React, { Component } from 'react';
import Axios from 'axios';
import DoctorAdd from './DoctorAdd';
import AmbulanceDisplay from './AmbulanceDisplay';


export class AmbulanceAdd extends Component {
    state={
        category:"",
        number:"",
        charges:"",
        showDoctor:false

    }
handleSubmit= event=>{
    event.preventDefault();
    let body ={
        "category": this.state.category,
        "number": this.state.number,
        "charges": this.state.charges,
       
      };
    
    Axios.post('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/ambulance',body)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })

    alert("Ambulance added successfully! Reload required");
        return;
}

    render() {
        return (
            <div>
   
            
            <h1 class="heading"> <span>Ambulances</span> info </h1>  
    <table>
        <tr>
            <td>
                <form autocomplete="off" >
                    <div>
                        <label for="doctorCode">Category</label>
                        <input type="text" name="doctorCode" id="doctorCode" class="Atext" onChange={e=>this.setState({category:e.target.value})}/>
                    </div>
                    <div>
                        <label for="doctor">Contact Number</label>
                        <input type="text" name="doctor" id="doctor" class="Atext"onChange={e=>this.setState({number:e.target.value})}/>
                    </div>
                    <div>
                        <label for="doctorSpec">Charges</label>
                        <input type="text" name="doctorSpec" id="doctorSpec" class="Atext" onChange={e=>this.setState({charges:e.target.value})}/>
                    </div>
                      <div class="form_action--button">
                        <input type="submit" value="Submit" class="Abtn" onClick={this.handleSubmit}/>
                        <input type="reset" value="Reset" class="Abtn"/>
                    </div>
                </form>
                <td>
                   
                </td>
            </td>
        </tr>
    </table>
    <div> 
            <center><button class="switch_button" onClick={()=>{ window.open("/DoctorAdd"); this.setState({showDoctor:true})}}>Switch to Doctor</button></center>
    </div>
    <AmbulanceDisplay/>
    

            </div>
        )
    }
}

export default AmbulanceAdd
