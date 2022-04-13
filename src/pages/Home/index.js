import React, { useState, useContext, useEffect } from 'react';
import Repos from '../../components/Repo';
import { Context } from '../../store/appContext';
import style from "./index.module.scss";
import Issues from '../../components/Issue';
import { useNavigate } from 'react-router-dom';
// import DragNDrop from '../../components/DragNDrop';


const Home = () => {
    const { store, actions } = useContext(Context)

    const [issues, setIssues] = useState(store.issues)
    const [repos, setRepos] = useState([])

    useEffect(()=>{
        const sessionRepos = JSON.parse(window.sessionStorage.getItem("repos"))
        if(store.repos.length > 0){
            setRepos(store.repos)
            window.sessionStorage.setItem("repos", JSON.stringify(store.repos));
        }else{
            setRepos(sessionRepos)
        }
    },[store.repos])

    useEffect(() => {
        console.log("issues", issues)
        // setIssues(store.issues)
        // window.sessionStorage.setItem("issues", JSON.stringify(store.issues));
        // if(repos.length>0){
        //     window.sessionStorage.setItem("repos", JSON.stringify(store.repos));
        // }
        setIssues(store.issues)
    }, [store.issues])


   
    return (
        <>
        <div className={style.root}>
            <div className={style.row}>
                <div className={style.column}>
                    
                    {repos&&repos.map(repo => (
                        <div key={repo.id}>
                            <Repos repository={repo} />
                        </div>
                    ))}
                    {/* {RenderRepos()} */}
                </div>
                <div className={style.column}>
                    
                    {issues.map(issue => (
                        <Issues key={issue.id} issue={issue} />
                    ))}
                </div>
            </div>

        </div>
        </>
    )
}

export default Home;