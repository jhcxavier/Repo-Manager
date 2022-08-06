import React from 'react';
import style from "./index.module.scss";
import { formatAsDate } from './utils';
import { lastUpdate } from './utils';

const Issues=({issue})=>{
    const currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    return(
        <div className={style.issueWrapper}>
            <img className={style.image} src={issue.user.avatar_url} alt="image"/>
            <div className={style.columnWrapper}>
                <h3>Title:{issue.title}</h3>
                <p>Created at: {formatAsDate(issue.created_at) }</p>
                <p>Last Update: {lastUpdate(currentDate, formatAsDate(issue.updated_at))}</p>
            </div>
        </div>
    );
}
export default Issues;