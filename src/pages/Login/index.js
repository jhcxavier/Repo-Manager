import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { useNavigate } from 'react-router-dom';
import style from "./index.module.scss";


const Login = () => {
    const { store, actions } = useContext(Context)
    const [apiToken, setApiToken] = useState("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");
    const [isConnected, setIsConnected] = useState(store.isLoggedin)
    const navigate = useNavigate()
    console.log("isConnected", isConnected)

    useEffect(() => {
        if (isConnected) {
            navigate("/home")
        }
    }, [isConnected])

    return (
        <>
            <div className={style.header}>
                <div><h1>Repo Management</h1></div>
                <div><img className={style.image} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" /></div>
            </div>
            <div className={style.content}>
                <span className={style.apiKey}>Api Key</span>
                <input onChange={(e) => setApiToken(e.target.value)} />
                <button onClick={() => {
                    try {
                        actions.getData(1, apiToken)
                        navigate('home')
                    } catch (e) {
                        alert('faild')
                    }
                }}>Connect</button>

            </div>
        </>
    )
}

export default Login;