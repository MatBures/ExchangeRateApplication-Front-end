import React, { useState, useEffect } from 'react';
 import axios from 'axios';

 export default function Home() {
   const [exchangeRates, setExchangeRates] = useState([]);

   useEffect(() => {
     viewExchangeRates();
   }, []);

   const viewExchangeRates = async () => {
     const result = await axios.get('http://localhost:8080/api/exchangerates?usedb=false');
     setExchangeRates(result.data);
   };

   return (
     <div className="container">
       <div className="py-4">
         <table className="table border shadow">
           <thead>
             <tr>
               <th>Id</th>
               <th>Short Name</th>
               <th>Valid From</th>
               <th>Name</th>
               <th>Country</th>
               <th>Move</th>
               <th>Amount</th>
               <th>Val Buy</th>
               <th>Val Sell</th>
               <th>Val Mid</th>
               <th>Curr Buy</th>
               <th>Curr Sell</th>
               <th>Curr Mid</th>
               <th>Version</th>
               <th>CNB Mid</th>
               <th>ECB Mid</th>
             </tr>
           </thead>

         </table>
       </div>
     </div>
   );
 }