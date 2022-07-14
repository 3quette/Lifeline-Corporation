import React, { Component } from 'react';
import Axios from 'axios';

export class DoctorDelete extends Component {
    state={
        id:""
    }
handleSubmit= event=>{
    event.preventDefault();
    Axios.delete(`http://61e3eb84fbee6800175eb123.mockapi.io/api/lc/doctor/${this.props.id}`)
    .then(res=>{
        console.log(res.data);
    })
    console.log("deleted");
    alert("Doctor deleted successfully! Reload required");
        return;
}
componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    if(nextProps){
    this.setState({id:nextProps.id});
    console.log("id: "+this.state.id);}
}
    render() {
        return (
            <div>
                
                    <button type='submit' id="crud_btn" onClick={this.handleSubmit}>delete</button>
               
                
            </div>
        )
    }
}

export default DoctorDelete
