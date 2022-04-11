import React, { useState, useContext, useEffect } from 'react';
import Repos from '../../components/Repo';
import { Context } from '../../store/appContext';
import style from "./index.module.scss";
import Issues from '../../components/Issue';
import { useNavigate } from 'react-router-dom';
// import DragNDrop from '../../components/DragNDrop';


const Home = () => {
    const { store, actions } = useContext(Context)
    const [issues, setIssues] = useState([])
    const repos = store.repos
    const navigate = useNavigate()
    
    useEffect(() => {
        setIssues(store.issues)
        
    }, [store.issues])

    return (
        <>
        <div className={style.root}>
            <div className={style.row}>
                <div className={style.column}>
                    
                    {repos.map(repo => (
                        <div key={repo.id}>
                            <Repos repository={repo} />
                        </div>
                    ))}
                </div>
                <div className={style.column}>
                    
                    {issues&&issues.map(issue => (
                        <Issues key={issue.id} issue={issue} />
                    ))}
                </div>
            </div>

        </div>
        </>
    )
}

export default Home;