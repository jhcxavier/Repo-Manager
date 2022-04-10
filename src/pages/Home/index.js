import React, {useState, useContext}from 'react';
import { Context } from '../../store/appContext';

const Home=()=>{
    const {store} = useContext(Context)
    const repos = store.repos
    return (
        <>
        {repos.map(repo=>(
            <div key={repo.id}>
                <h1>{repo.id}</h1>
            </div>
        ))}
        </>
    )
}

export default Home;