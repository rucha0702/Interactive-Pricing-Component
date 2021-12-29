import React from 'react';
import {useState} from 'react';
import './css/Card.css';


function Card(props) {
    const [price, setPrice] = useState(8);
    const [money, setMoney] = useState(10);
    const [toggle, setToggle] = useState(false);
    const switchToggle = ()=>{
        toggle ? setToggle(false) : setToggle(true);
    }
    const updatePrice = ()=>{
        switchToggle();
        if(money===10)
        {price===8? setPrice(price - price/4) : setPrice(8);}
        else if(money===50)
       { price===12? setPrice(price - price/4) : setPrice(12);}
        else if(money===100)
       { price===16? setPrice(price - price/4) : setPrice(16);}
       else if(money===500)
       {price===24? setPrice(price - price/4) : setPrice(24)}
       else if(money===1000)
       {price===36? setPrice(price - price/4) : setPrice(36)}

    }
    return (
        <div className={props.mode? "outer-container outer-container-dark": "outer-container"}>
            <nav>
                <ul className="flex">
                    <li><button onClick={()=>{setMoney(10);setPrice(8);setToggle(false)}}>10K</button></li>
                    <li><button onClick={()=>{setMoney(50);setPrice(12);setToggle(false)}}>50K</button></li>
                    <li><button onClick={()=>{setMoney(100);setPrice(16);setToggle(false)}}>100K</button></li>
                    <li><button onClick={()=>{setMoney(500);setPrice(24);setToggle(false)}}>500K</button></li>
                    <li><button onClick={()=>{setMoney(1000);setPrice(36);setToggle(false)}}>1M</button></li>
                </ul>
            </nav>
            <div className="inner-container">
            <div className="flex margin price-container">
              <div>{money}K PAGEVIEWS</div>
              <div><span className={props.mode?"price price-dark" : "price"}>${price}.00</span> / month</div>
           </div>
           <div className="flex margin padding billing-main">
               <div className="flex billing">
            <div>Monthly billing</div> 
             <div onClick={updatePrice} className={props.mode? "toggle-out toggle-out-dark" : "toggle-out"}>
                 <div className={toggle ? "toggle-in-yearly" : "toggle-in-monthly"}>
                     </div>
             </div>
           {/* <button onClick={updatePrice}>Change</button> */}
            <div>Yearly billing</div>
            <div className="discount" >25% discount</div>
            </div>
           </div>
           <div className="flex margin features-container">
             <div className="">
               <div className="flex features">
                   <div><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg></div>
                   <div>Unlimited Websites</div>
               </div>
               <div className="flex features">
                   <div><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg></div>
                   <div>100% Data Ownership</div>
               </div>
               <div className="flex features">
                   <div><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg></div>
                   <div>Email Reports</div>
               </div>

             </div>
           
             <button className={props.mode? "start start-dark" : "start"}>Start my Trial</button>
            </div>
           </div>
           
        </div>
    )
}

export default Card
