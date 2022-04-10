import React, { useState, useContext, useEffect } from 'react';
import Repos from '../../components/Repo';
import { Context } from '../../store/appContext';
import style from "./index.module.scss";
import Issues from '../../components/Issue';

const Home = () => {
    const { store } = useContext(Context)
    const repos = store.repos
    const [issues, setIssues]=useState([])
    console.log("issues",store.issues)
    useEffect(()=>{
        setIssues(store.issues)
    },[store.issues])
    return (
        <div className={style.root}>
            <div className={style.row}>
            <div> {repos.map(repo => (
                <div key={repo.id}>
                    <Repos repository={repo} />
                </div>
            ))}
            </div>
            <div className={style.column}>
            <h1>hello</h1>
                {issues.map(issue=>(
                    <Issues key={issue.id} issue={issue} />
                ))}
            </div>
            </div>
          
        </div>
    )
}

export default Home;