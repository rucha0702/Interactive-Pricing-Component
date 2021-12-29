import React from 'react'
import {useState} from 'react';
import Card from './Card';
import './css/Container.css';
 
 function Container() {

     const [mode, setMode]= useState(false);

     const changeMode = ()=>{
         mode ? setMode(false) : setMode(true);
     }
     return (<>
         <div className={mode? "container container-dark" : "container"}>
             <div onClick={changeMode} className="mode"><div className={mode? "sun": "moon"}></div></div>
             <div className={mode? "bg-none":"bg-img"}><svg xmlns="http://www.w3.org/2000/svg" width="1440" height="449"><path fill="#F1F5FE" fillRule="evenodd" d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"/></svg></div>
             <div className="head">
                 <div className={mode? "circles circles-opacity" : "circles"}><svg className="circle" xmlns="http://www.w3.org/2000/svg" width="146" height="145"><g fill="none" fillRule="evenodd" stroke="#CFD8EF"><circle cx="63" cy="82" r="62.5"/><circle cx="105" cy="41" r="40.5"/></g></svg></div>
                 <div className={mode? "bold bold-text" : "bold"}>Simple, traffic-based pricing</div>
                 <div className="sign-up">Sign-up for our 30-day trial. No credit card required.</div>
             </div>
             <div className="card-container">
             <Card mode={mode}/>
             </div>
            
         </div></>
     )
 }
 
 export default Container
 