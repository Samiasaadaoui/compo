import React from 'react'
import bb from "../Image/img2.jpg"
import CC from "../Image/img3.jpg"
import DD from "../Image/img4.jpg"
import HH from "../Image/img5.jpg"


function Products() {
  return(
    <div>
    <div id = "Products">
      <h2 class="text-important">Products</h2>
      <div class="products-container">
  
    
    <div class="product-card">
        <img   src={bb} alt="product" />
        <h3></h3>
        <p>
        sac à bandoulière
        </p>
        <p><a href="">prix=150dt</a> </p>
      </div>
      

      <div class="product-card ">
      <img   src={CC} alt=" product" />
      <h3></h3>
      <p>
       Sac a bandoulière
      </p>
      <p><a href="">prix=200dt</a></p>
    </div>
    
      
    <div class="product-card ">
    <img   src = {DD}  alt="product" />
    <h3></h3>
    <p>
     Sac a bandoulière
    </p>
    <p><a href="">prix=250dt</a></p>
  </div>

  
 </div>
    </div>
    </div>

  );
}

export default Products 
