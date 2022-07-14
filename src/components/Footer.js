import React, { Component } from 'react'

export class Footer extends Component {
render() {
 return (
  <div className='footerMainDiv'>
      <center>
            <table className='footer_table' >
            <center><div id='footer_logo'>
          <img src='/logo+name.png' alt='web logo' width='10%' height='10%'/>
           </div>
           </center>
            <center>
                
                <th id='logo'>   
               <a href="https://www.facebook.com/" target="blank"><img src="/fblogo.png" height="35px" width="35px;" alt="facebook logo"/></a>
               </th>
               <th id='logo'>
               <a href="https://www.instagram.com/" target="blank"><img src="/instalogo.png" height="30px" width="30px;"alt="instagram logo"/></a>
               </th>
               <th id='logo'>
               <a href="https://twitter.com/" target="blank"><img src="/twitterlogo.png" height="30px" width="30px;"alt="twitter logo"/></a>
               </th>
               <th id='logo'>
               <a href="https://pk.linkedin.com/" target="blank"><img src="/linkedin.png"height="30px" width="30px;"alt="linkedin logo logo"/></a>
               </th>
     </center>               
             </table>
            </center>
             <p id='rights'>©2022 All rights reserved Lifeline Corporation . Privacy Policy</p>  
            </div>
        )
    }
}

export default Footer
