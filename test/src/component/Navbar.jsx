import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

  return (
 <>
 <div>
   
 </div>
 <div>
     <button onClick={() => navigate('/')}>Home</button>
     <button onClick={ () =>navigate('/about')}>About</button>
     <button onClick={ () =>navigate('/contect')}>Contect us</button>
     <button onClick={ () =>navigate('/belog')}>belog</button>
 </div>
 
 
 </>
  )
}

export default Navbar