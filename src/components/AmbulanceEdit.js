import React, { Component } from 'react'
import Axios from 'axios';

export class AmbulanceEdit extends Component {
    state={
        category:"",
        number:"",
        charges:"",

    }
handleSubmit= event=>{
    event.preventDefault();
    let body ={
        "category": this.state.category,
        "number": this.state.number,
        "charges": this.state.charges,
      };
    
      Axios.put(`http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/ambulance/${this.props.id}`,body)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
    alert("Ambulance updated successfully! Reload required");
        return;
}
componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    if(nextProps){
    this.setState({category:nextProps.category, number:nextProps.number, charges:nextProps.charges});
    console.log("category: "+this.state.category+"model: "+this.state.number+"charges: "+this.state.charges);}
}


    render() {
        const { onClose, isOpen } = this.props;
        console.log("isOpen: "+isOpen);
        const {number} = this.state;
        return (
            <div>
             {isOpen ?   <form>
                <div id='more_info'>
                <button id='closebutton' style={{marginLeft:'200px'}}  onClick={onClose}>&times;</button>
                <center> <div id='carFullInfo_head'>Edit Info</div></center>
                   <label  id='more_info_content'>
                        Category:
                        <input type='text' value={this.state.category} onChange={e=>{this.setState({category:e.target.value})}}></input>
                    </label><br/>
                    <label  id='more_info_content'>
                        Number:
                        <input type='text' value={number} onChange={e=>{this.setState({number:e.target.value})}}></input>
                    </label><br/>
                    <label  id='more_info_content'>
                        Charges:
                        <input type='text' value={this.state.charges} onChange={e=>{this.setState({charges:e.target.value})}}></input>
                    </label><br/>
                    <button id="crud_btn" type='submit' onClick={this.handleSubmit}>Update</button>
                    </div>
                </form>:""}
                </div>
        )
    }
}

export default AmbulanceEdit