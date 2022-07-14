import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div id='header'>
               <center> <img className='logo' src="/logo.png"alt='web logo'></img>
                <h1 id='header-text'>Lifeline Corporation!</h1></center>
            </div>
        )
    }
}

export default Header
