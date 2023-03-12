import React from 'react';

function Contact(props) {
     return (
          <div className="form">
               <h1>Contact Us</h1>
              
               <form   className=" container">
                    <div className=" form-row">
                         <div  class="form-group col-md-6">
                              <label for="inputEmail4">Email</label>
                              <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                         </div>
                         <div class="form-group col-md-6">
                              <label for="inputAddress">Address</label>
                              <input type="text" class="form-control"  placeholder="Address"/>
                         </div>
                    </div>
                  
                    <div class="form-row">
                         <div class="form-group col-md-6">
                              <label for="inputCity">City</label>
                              <input type="text" placeholder='City' class="form-control" id="inputCity"/>
                         </div>
                         <div class="form-group col-md-6">
                              <label for="inputState">State</label>
                              <input type="text" placeholder='State' class="form-control" id="state" />
                              
                         </div>
                         
                         
                    </div>
                   
                    <button type="submit" className="btn btn-primary m-2">Sign in</button>
               </form>
               <div className="m-1 p-1">Direct phone line: +41772304440</div>
               <div className="m-1 p-1">Direct email: <a href="mailto: webprogrammerstechnology@gmail.com">Send Email</a> </div>
               <p className="m-1 p-1">Address: Schaffhauserstrasse 560, Zurich 8052, Switzerland</p>
               <div className="m=3 p-3">
                    <a href=""><button type="button" className="btn btn-secondary m-3">Terms</button></a>
                    <a href=""><button type="button" className="btn btn-secondary m-3">Policy</button></a>
                    <a href="/contact"><button type="button" className="btn btn-secondary m-3">Contact</button></a>
               <p className='m-3 p-3'>Copyright © 2023 CBD Flowers UJEY, all rights reserved.</p>
               </div>
          </div>
     );
}

export default Contact;