import React, {useState} from 'react';

const Login=()=>{
    const [apiToken, setApiToken] = useState("");
    const [repos, setRepos] = useState([])


    const getData=(page,token)=>{
        let perPage=30;
        fetch(`https://api.github.com/search/repositories?q=user:jhcxavier&per_page=${perPage}&page=${page}`, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log('res', res)
                // setStore({repos:[...getStore().repos, ...res.items]})
                setRepos([...repos, ...res.items])
                if(res.total_count > perPage && res.items.length > 0){
                    
                  getData(page + 1, token)
                }else{
                    return;
                }
            }).catch(error=>{
                console.log(error)
            })
    }
    return(
        <>
            <input onChange={(e)=>setApiToken(e.target.value)} />
            <button onClick={()=>getData(1,apiToken)}>Connect</button>
        </>
    )
}

export default Login;