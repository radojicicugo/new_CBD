import React from 'react';

function Home(props) {
     return (
          <div className='box'>
               <div className="home">
                    <h3 style={{ color: 'white' }} className="m-3 p-3">See You SOON</h3>
                    
                    <div className="home0">
                    <h1 className=" p-2">Buy the best of Swiss CBD Flowers & buds</h1>
                    <h3 className="m-3 p-2" >100% of our hemp products </h3>
                    <div className="m-3 p-2">
                         <h4 className="m-3 p-2">OUR CBD FLOWER CHARACTERISTICS:</h4>
                         <div className="m-3 p-2">
                              <ul>
                                   <li>Moisture Content 26% or less</li>
                                   <li>Analysis</li>
                                   <li>Quality Screening</li>
                              </ul></div>  
                              <h4>don't miss Sugar Kiss</h4>
                         </div>
                    </div>
                    
               </div>
               
               <footer className=" foot m-4 p-3">
                <div className='foo-div m-5 p-3'>
                         <h5>Disclaimer</h5>
                         <p>CBD Flower is not used to treat, cure, or mitigate any disease, illness, ailment, and/or condition. We make no representations as to intended use or suitability for use</p>
                 <p>Address: Schaffhauserstrasse 560, Zurich 8052, Switzerland</p>
                        
                </div>
               </footer>
               <p className='m-3 p-3'>Copyright © 2023 CBD Flowers UJEY, all rights reserved.</p>
              <a href=""><button type="button" className="btn btn-secondary m-3">Terms</button></a>
              <a href=""><button type="button" className="btn btn-secondary m-3">Policy</button></a>
              <a href="/contact"><button type="button" className="btn btn-secondary m-3">Contact</button></a>
        </div>
     );
}

export default Home;