import React, {useContext} from 'react';
import { Context } from '../../store/appContext';
import styles from "./index.module.scss"

const Repos=({repository})=>{
    const {actions, store}=useContext(Context)
    const url = repository.issues_url.split("{")
    return(
       <div className={styles.repoWrapper} onClick={()=>actions.getIssues(url[0], store.token)}>
          <h3>{repository.name}</h3> 
       </div>
    )
}
export default Repos;