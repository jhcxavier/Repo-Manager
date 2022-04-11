import React, { useState, useContext, useEffect } from 'react';
import Repos from '../../components/Repo';
import { Context } from '../../store/appContext';
import style from "./index.module.scss";
import Issues from '../../components/Issue';
import DragNDrop from '../../components/DragNDrop';


const Home = () => {
    const { store } = useContext(Context)
    const repos = store.repos
    const [issues, setIssues] = useState([])
   

    useEffect(() => {
        console.log("state")
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
                    
                    {issues.map(issue => (
                        <Issues key={issue.id} issue={issue} />
                    ))}
                   {/* {store.issues && <DragNDrop list={issues}/>} */}
                </div>
            </div>

        </div>
        </>
    )
}

export default Home;