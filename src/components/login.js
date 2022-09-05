import './login.css';
import { useState,useEffect } from 'react';

function Login(props){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[isvalid,setValid]=useState(false);

    const login=(a)=>{
        a.preventDefault();
        localStorage.setItem("login",true);
        props.isLoggedin(true);
    }

    useEffect(() => {
        fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/login').then((response)=>{
            if(response.ok){
                return response.json();
            } 
            return false;
        }).then((response)=>{
            if(response){
                props.isLoggedin(true);
            }
        })
    },[props]);

    useEffect(()=>{
        if((email.includes('@') && password.length > 5)){
            setValid(true);
        }

},[email,password]);

    useEffect(()=>{
        return ()=> console.log('login is unmounted');   
},[]);

const emailHandler=(a)=>{
    setEmail(a.target.value)
}
const passwordHandler=(a)=>{
    setPassword(a.target.value)
}

return(
    <form onSubmit={login}>
        <input type="email" placeholder="Enter email" onChange={emailHandler} value={email} required/>
        <input type="password" placeholder="Enter password" onChange={passwordHandler} value={password} required/>
        {isvalid? <button type="submit">Login</button> : <button type="submit" disabled>Login</button>}
    
    </form>
);
}


export default Login;