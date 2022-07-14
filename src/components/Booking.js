import React, { Component } from 'react';
import Axios from 'axios';
import NavBar from './NavBar';
export class Booking extends Component {
    state={
        doctorname:"",
        time:"",

    }
handleSubmit= event=>{
    event.preventDefault();
    let body ={
        "doctorname": this.state.doctorname,
        "time": this.state.time,
       
      };
    
    Axios.post('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/Booking',body)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
    alert("Appointment Scheduled Successfully!.");
    this.setState({showLogin:true});
}
// constructor(){
//     console.log(window.localStorage.getItem('doctorID'))
//     window.localStorage.getItem('usdoctorIDer');
// }

componentDidMount(){
    console.log(window.localStorage.getItem('doctorID'))
   this.setState({doctorname:window.localStorage.getItem('doctorID')});
}  

    render() {
        return (
            <div>
                <NavBar/>
            <img class="wave" src="/wave.png"/>
    <div class="container">
        <div class="img">
            <img src="/bg.png"/>
        </div>
        <section class="book" id="book">
            <h1 class="heading"> <span>book</span> now </h1>    
        
            <div class="row">
        
               
                <form >
                    <h3>book appointment</h3>
                    <input type="text"value={this.state.doctorname}  placeholder="Doctor's name" class="box" onChange={e=>this.setState({doctorname:e.target.value})} />
                    <input type="datetime-local" class="box" onChange={e=>this.setState({time:e.target.value})}/>
                    <input type="submit" value="book now" class="btn" onClick={this.handleSubmit}/>
                </form>
        
            </div>
        
        </section>
    </div>

            </div>
        )
    }
}

export default Booking
