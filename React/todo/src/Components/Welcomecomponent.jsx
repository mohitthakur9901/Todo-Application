
import {useParams, Link} from 'react-router-dom';
function Welcomecomponent(){

    const {username} = useParams();
    return(

        <>
        <h1>WELCOME {username} TO TODO APP </h1>
        <div className='Welcome'>
            MANAGE YOU TODOS - <Link to="/todos">CLICK HERE </Link>
        </div>


        </>
    )
}

export default Welcomecomponent;