import React from 'react';
import {useState} from 'react';

function Card() {
    const [price, setPrice] = useState(8);
    const [money, setMoney] = useState(10);
    const updatePrice = ()=>{
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
        <div>
            <nav>
                <ul>
                    <li><button onClick={()=>{setMoney(10);setPrice(8);}}>10K</button></li>
                    <li><button onClick={()=>{setMoney(50);setPrice(12);}}>50K</button></li>
                    <li><button onClick={()=>{setMoney(100);setPrice(16);}}>100K</button></li>
                    <li><button onClick={()=>{setMoney(500);setPrice(24);}}>500K</button></li>
                    <li><button onClick={()=>{setMoney(1000);setPrice(36);}}>1M</button></li>
                </ul>
            </nav>
            <div>
              <div>{money}K PAGEVIEWS</div>
              <div>${price}.00 / month</div>
           </div>
           <div>
            <div>Monthly billing</div>
           <button onClick={updatePrice}>Change</button>
            <div>Yearly billing</div>
            <div>25% discount</div>
           </div>
           <div>
               <div>
                   <div>*</div>
                   <div>Unlimited Websites</div>
               </div>
               <div>
                   <div>*</div>
                   <div>100% Data Ownership</div>
               </div>
               <div>
                   <div>*</div>
                   <div>Email Reports</div>
               </div>
           </div>
        </div>
    )
}

export default Card
