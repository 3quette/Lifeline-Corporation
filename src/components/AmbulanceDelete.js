import React, { Component } from 'react';
import Axios from 'axios';

export class AmbulcanceDelete extends Component {
    state={
        id:""
    }
handleSubmit= event=>{
    event.preventDefault();
    console.log("this.props.id");
    console.log(this.props.id);
    Axios.delete(`http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/ambulance/${this.props.id}`)
    .then(res=>{
        console.log(res.data);
    })
    console.log("deleted");
    alert("Ambulance deleted successfully! Reload required");
        return;
}

    render() {
        return (
            <div>
                
                    <button type='submit' id="crud_btn" onClick={this.handleSubmit}>delete</button>
               
                
            </div>
        )
    }
}

export default AmbulcanceDelete
