import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { store, actions } = useContext(Context)
    const [apiToken, setApiToken] = useState("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");
    const [isConnected, setIsConnected]=useState(store.isLoggedin)
    const navigate = useNavigate()
    console.log("isConnected",isConnected)
  
    useEffect(()=>{
        if(isConnected){
            navigate("/home")
        }
    },[isConnected] )

    return (
        <>
            <input onChange={(e) => setApiToken(e.target.value)} />
            <button onClick={() => {
                try{
                    actions.getData(1, apiToken)
                    navigate('home')
                }catch(e){
                    alert('faild')
                }
            }}>Connect</button>
        </>
    )
}

export default Login;