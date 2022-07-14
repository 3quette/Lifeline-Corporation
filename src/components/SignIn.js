import React, { Component } from 'react';
import Axios from 'axios';
import Login from './Login';
import './App.css';


export class SignIn extends Component {
    state={
        name:"",
        email:"",
        password:"", 
        showLogin:false
    }
handleSubmit= event=>{
    event.preventDefault();
    if(this.state.name.length <= 0 || this.state.email.length <= 0 || this.state.password.length <= 0 ){
        alert("Please provide Valid Values.");
        return;
    }
    let body ={
        "name": this.state.name,
        "email": this.state.email,
        "password": this.state.password
      };
    
    Axios.post('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/patient',body)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
    alert("Registered Successfully! Return to login page.");
    this.setState({showLogin:true});
    
}


    render() {
        return (
            <div>
                 {this.state.showLogin ? <Login/> :
            <div>
                <div class="img">
            <img src="/Doctors.png" alt="doctors"/>
        </div>
        
        <div class="login_container">
            <form id="signin-form">
                <img class="avatar" src="/Avatar.png" alt="avatar"/>
                <h2>WELCOME</h2>
                <div class="input_div one">
                    <div class="i">
                    </div>
                    <div>
                        
                        <input class="input" type="text" placeholder="User Name" onChange={e=>this.setState({name:e.target.value})}/>
                    </div>
                </div>
                <div class="input_div one">
                    <div class="i">
                    </div>
                    <div>
                     
                        <input class="input" type="email" placeholder="Email Address" onChange={e=>this.setState({email:e.target.value})}/>
                    </div>
                </div>
                <div class="input_div two">
                    <div class="i">
                    </div>
                    <div>
                        
                        <input class="input" type="password" placeholder="Password" onChange={e=>this.setState({password:e.target.value})}/>
                    </div>
                </div>
                    <button class="btn" value="Register" type='submit' onClick={this.handleSubmit}>Register</button>
            </form>
        </div>
       

            </div>
        } 
            </div>
        )
    }
}

export default SignIn
