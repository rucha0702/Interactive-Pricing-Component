import React from 'react'
import Card from './Card'
import './css/Container.css';
 
 function Container() {
     return (
         <div className="container">
             <div className="bg-img"><svg xmlns="http://www.w3.org/2000/svg" width="1440" height="449"><path fill="#F1F5FE" fill-rule="evenodd" d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"/></svg></div>
             <div className="head">
                 <div className="circles"><svg className="circle" xmlns="http://www.w3.org/2000/svg" width="146" height="145"><g fill="none" fill-rule="evenodd" stroke="#CFD8EF"><circle cx="63" cy="82" r="62.5"/><circle cx="105" cy="41" r="40.5"/></g></svg></div>
                 <div className="bold">Simple, traffic-based pricing</div>
                 <div className="sign-up">Sign-up for our 30-day trial. No credit card required.</div>
             </div>
             <div className="card-container">
             <Card />
             </div>
            
         </div>
     )
 }
 
 export default Container
 