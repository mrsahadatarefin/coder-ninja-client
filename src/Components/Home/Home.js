import React from 'react';

import img from "../Home/react.png"

const Home = () => {
    return (
        <div>
            <h1 style={{textAlign:"center" ,padding:"10px"}}>Learn Something Good</h1>
           <img  style={{ height:"70vh", width:"100vw",padding:"10px"}} src={img} alt="" srcset="" /> 
                
            
            
        </div>
    );
};

export default Home;