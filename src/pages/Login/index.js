import React, { useState, useContext } from 'react';
import { Context } from '../../store/appContext';
import { useNavigate } from 'react-router-dom';
import style from "./index.module.scss";


const Login = () => {
    const { store, actions } = useContext(Context);
    const [apiToken, setApiToken] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className={style.header}>
                <div className={style.headerWrapper}>
                    <div className={style.title}>
                        <h1>Repo Management</h1>
                    </div>
                    <img className={style.image} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                </div>
                <div className={style.panel}>
                    <h4>You will need a Github access token.</h4>
                    <ol>
                        <li>In your Github account, go to your profile (click on your avatar on the top right corner).</li>
                        <li>Then click on <b>Settings</b>.</li>
                        <li>On the left Menu, click on the last item: <b>{'<>'} Developer settings</b>.</li>
                        <li>Select <b>Personal Access Tokens</b>.</li>
                        <li>Generate a new token, with the selected scopes: <b>repo</b>.</li>
                        <li>Use this token to login to the application.</li>
                    </ol>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.labelWrapper}>
                <span className={style.label}>Username</span>
                    <input onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className={style.labelWrapper}>
                    <span className={style.label}>Github Access Token</span>
                    <input onChange={(e) => setApiToken(e.target.value)} />
                </div>
                <button
                    className={style.connect}
                    onClick={() => {
                        window.sessionStorage.setItem("issues", null);
                        window.sessionStorage.setItem("repos", null);
                        actions.getData(1, apiToken, user, navigate);
                    }}
                >
                    Connect
                </button>
                {store.invalidCredentials && <small className={style.loginError}>
                    Invalid credentials
                </small>}
            </div>
        </>
    );
};

export default Login;