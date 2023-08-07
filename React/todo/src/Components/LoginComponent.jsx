import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { useAuth } from './Security/AuthContext';

function LoginComponent(){

    const [username,setUsername] = useState("mohit");
    const [password,setPassword] = useState("1234");
    const [showErrorMessage,setShowErrorMessage] = useState(false);
    // const [showsuccessMessage,setShowsuccessMessage] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth()
 


    function hanleUserNameChange(event){
        setUsername(event.target.value);
    }

    function hanlePassWordChange(event){
        setPassword(event.target.value);

    }
    function handleSubmit(){
        if(authContext.login(username,password)===true && username==="mohit" && password==="1234"  ){
            navigate(`/welcome/${username}`)
        }
        else{
            setShowErrorMessage(true)
            
        }
    }

    return(
        <div className="Login">
            <div className='errorMessage'>
                {showErrorMessage && <div>Invalid Credentials</div>}
            
            </div>
             
            <div className="LoginForm">
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" className='user' value={username} onChange={hanleUserNameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" className='password' value={password} onChange={hanlePassWordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit} >login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;