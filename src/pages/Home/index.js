import React, { useState, useContext, useEffect } from 'react';
import Repos from '../../components/Repo';
import { Context } from '../../store/appContext';
import style from "./index.module.scss";
import Issues from '../../components/Issue';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Home = () => {
    const { store } = useContext(Context)

    const [issues, setIssues] = useState(store.issues)
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const sessionRepos = JSON.parse(window.sessionStorage.getItem("repos"))
        if (store.repos.length > 0) {
            setRepos(store.repos)
            window.sessionStorage.setItem("repos", JSON.stringify(store.repos));
        } else {
            setRepos(sessionRepos)
        }
    }, [store.repos])

    useEffect(() => {
        const sessionIssues = JSON.parse(window.sessionStorage.getItem("issues"))
        if (store.issues.length > 0) {
            setIssues(store.issues)
            window.sessionStorage.setItem("issues", JSON.stringify(store.issues));
        } else {
            if(store.token){
                setIssues(store.issues)
            }else{
                setIssues(sessionIssues)
            }
        }
    }, [store.issues])

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        let updatedList = [...issues];
        const [reorderedItem] = updatedList.splice(result.source.index, 1);
        updatedList.splice(result.destination.index, 0, reorderedItem);
        window.sessionStorage.setItem("issues", JSON.stringify(updatedList));
        setIssues(updatedList);
    }
    return (
        <>
            <div className={style.root}>
                <div className={style.row}>
                    <div className={style.column1} >
                        {repos && repos.map((repo, index) => (
                             <Repos key={repo.id}repository={repo} index={index} />
                        ))}
                    </div>
                    {issues && issues.length > 0 ?
                        <DragDropContext onDragEnd={handleDragEnd}>
                            <Droppable droppableId='issues'>
                                {(provided) => (
                                    <ul className={style.column} {...provided.droppableProps} ref={provided.innerRef}>
                                        {issues && issues.map((issue, index) => (
                                            <Draggable key={issue.id} draggableId={issue.id} index={index}>
                                                {(provided) => (
                                                    <li {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef} >
                                                        <Issues
                                                            issue={issue} />
                                                    </li>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </DragDropContext> : <div className={style.column} />}
                </div>
            </div>
        </>
    )
}

export default Home;