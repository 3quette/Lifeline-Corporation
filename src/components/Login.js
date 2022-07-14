import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Home from'./Home';
import SignIn from './SignIn';

export class Login extends Component {
    state={
        patients:[],
        email:" ",
        password:" ",
        showHome:false,
        showSignIn:false,
    
    }
    componentDidMount(){
        Axios.get('http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/patient').then(res=>{
        console.log(res);
        this.setState({patients: res.data});
    });
    }  
handleSubmit= event =>{
        console.log(this.state.patients);
        console.log(this.state.email);
        console.log(this.state.password);
        for (const patient of this.state.patients) {
            if(patient.email === this.state.email && patient.password === this.state.password){
                alert("Login Successful!");
                this.setState({showHome:true});
                return;
            }            
        }
        alert("Invalid id or password!");
        return;

    }
    
    
    render() {
        return (
            <div>
                 {this.state.showHome ? <Home/> : (this.state.showSignIn? <SignIn/>:
            <div class="container">
            <div class="img">
                <img src="/Doctors.png" alt="doctor"/>
            </div>
           
            <div class="login_container">
                <form >
                    <img class="avatar" src="/Avatar.png" alt="avatar"/>
                    <h2>WELCOME</h2>
                    <div class="input_div one">
                        <div class="i">
                            <i class="fas fa-user"> </i>
                        </div>
                        <div>
                            
                            <input class="input" type="text"placeholder="Email" onChange={e=>this.setState({email:e.target.value})}/>
                        </div>
                    </div>
                    <div class="input_div two">
                        <div class="i">
                            <i class="fas fa-lock"> </i>
                        </div>
                        <div>
                            <input class="input" type="password"placeholder="Password" onChange={e=>this.setState({password:e.target.value})}/>
                        </div>
                    </div>
                   < button class="btn" value="Loin" type='submit' onClick={this.handleSubmit}>Login</button>
                   < button class="btn" value="Register" type='submit' onClick={()=>{console.log("DOGGG");this.setState({showSignIn:true})}}>Register</button>                 
                </form>
            </div>
        </div>
                 )}
        </div>
        )
    }
}

export default Login
