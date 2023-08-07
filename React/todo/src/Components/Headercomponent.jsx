import {Link} from 'react-router-dom';
import {  useAuth } from './Security/AuthContext';


function Headercomponent(){

    function logout(){
        authContext.logout()
    }


    const authContext = useAuth()
    const isAthenticated = authContext.isAuth;
    console.log(isAthenticated);

    return(
      <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {isAthenticated &&  <Link className="nav-link" to="/welcome/mohit">Home</Link>}</li>
                            <li className="nav-item fs-5">
                                {isAthenticated &&<Link className="nav-link" to="/todos">Todos</Link>}</li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            {!isAthenticated && <Link className="nav-link" to="/login">Login</Link>}</li>
                        <li className="nav-item fs-5">
                            {isAthenticated && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}</li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}

export default Headercomponent;