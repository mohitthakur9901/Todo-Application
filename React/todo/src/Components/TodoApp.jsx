import React from 'react'
import './TodoApp.css'

import {BrowserRouter , Routes,Route, Navigate} from 'react-router-dom';
import LogoutComponent from './LogoutComponent';
import Welcomecomponent from './Welcomecomponent';
import Errorcomponent from './Errorcomponent';
import TodoComponent from './TodoComponent';
import Headercomponent from './Headercomponent';
import LoginComponent from './LoginComponent';
import AuthoProvider, { useAuth } from './Security/AuthContext';
// import Footercomponent from './Footercomponent';

function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    
    if(authContext.isAuth){
        return children
    }
        
    return <Navigate to="/" />
}



const TodoApp = () => {
  return (
   
    <div className='TodoApp'>
         
        <AuthoProvider>
        <BrowserRouter>
        <Headercomponent/>
        <Routes>
            <Route path='/' element={<LoginComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/welcome/:username' element={<AuthenticatedRoute><Welcomecomponent /></AuthenticatedRoute>} />
            <Route path='*' element={Errorcomponent} />
            <Route path='/todos' element={<AuthenticatedRoute><TodoComponent /></AuthenticatedRoute>} />
            <Route path='/logout' element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />
        </Routes>
     
        </BrowserRouter>
        {/* <Footercomponent/> */}
        </AuthoProvider>
        

    </div>
  )
}

export default TodoApp










