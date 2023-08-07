import { AuthoContext } from "./Security/AuthContext";
import { useContext } from 'react';


function Footercomponent(){

    const authContext= useContext(AuthoContext);
    console.log(`Footer component- ${authContext.number}`);

    return(
        <footer className='Footercomponent'>
        
       <div className='container'>
           <h1>Footer</h1>
       </div>
        </footer>
    )
}

export default Footercomponent;