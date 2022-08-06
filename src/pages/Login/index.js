import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { useNavigate } from 'react-router-dom';
import style from "./index.module.scss";


const Login = () => {
    const { actions } = useContext(Context);
    const [apiToken, setApiToken] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    return (
        <>
            <div className={style.header}>
                <div className={style.headerWrapper}>
                <div className={style.title}><h1>Repo Management</h1></div>
                <div><img className={style.image} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" /></div>
                </div>
               
                <div className={style.panel}>
                    <ol>
                        <li>To Successful run this app you need to access your Github account.</li>
                        <li>On the top right corner, click on your profile.</li>
                        <li>Chosse Settings, then on the left Menu, scroll all the way down and select Developer Settings.</li>
                        <li>After doing this selection there will be a Manu on the left hand corner, select Personal Access Tokens.</li>
                        <li>Generate a new token, with the select scopes "repo".</li>
                        <li>Use that token to login the application.</li>
                    </ol>

                </div>
            </div>

            <div className={style.content}>
                <div className={style.labelWrapper}>
                <span className={style.label}>Username</span>
                    <input onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className={style.labelWrapper}>
                    <span className={style.label}>Api Key</span>
                    <input onChange={(e) => setApiToken(e.target.value)} />
                </div>

                <button className={style.connect} onClick={() => {
                        window.sessionStorage.setItem("issues", null);
                        window.sessionStorage.setItem("repos", null);
                        actions.getData(1, apiToken, user)
                        navigate("/home")


                    }}>Connect</button>
            </div>
        </>
    )
}

export default Login;