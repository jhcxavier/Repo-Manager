import React, {useContext} from 'react';
import { Context } from '../../store/appContext';
import styles from "./index.module.scss"

const Repos=({repository, index})=>{
    const {actions, store}=useContext(Context)
    const url = repository.issues_url.split("{")
    
    return(
       <div className={styles.repoWrapper} onClick={()=>actions.getIssues(url[0], store.token)}>
          <h3 className={styles.full}>{index+1}. {repository.name}</h3> 
          <h3 className={styles.mobile}>{repository.name}</h3>
       </div>
    )
}
export default Repos;