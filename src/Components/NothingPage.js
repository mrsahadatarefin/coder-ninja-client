import React from 'react';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const NothingPage = () => {
    return (
        <div style={{display:'flex', justifyContent:"center" ,}}>
            <h1 style={{display:'flex', justifyContent:"center"}}>404 page</h1>
            <Button  variant="primary" type="submit"><Link to={'/'} style={{color:'white'}}>Go to home</Link>
        
      </Button>
        </div>
    );
};

export default NothingPage;