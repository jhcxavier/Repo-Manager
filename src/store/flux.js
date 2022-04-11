const getState = ({ getStore, setStore, getActions }) => {
    
    const reposPerPage = 30;
    return {
        store: {
            userData: null,
            isLoggedin: false,
            token:"",
            repos:[],
            issues:[]
        },
        actions: {
            getToken:(token)=>{
                setStore({token:token})
            },
            getData:(page, token)=>{
                fetch(`https://api.github.com/search/repositories?q=user:jhcxavier&per_page=${reposPerPage}&page=${page}`, {
                    headers: {
                        "Authorization": `Token ${token}`
                    }
                })
                    // Parse the response as JSON
                    .then(res => res.json())
                    .then(res => {
                        console.log('res', res)
                        setStore({repos:[...getStore().repos, ...res.items]})
                        setStore({isLoggedin:true})
                        if(res.total_count > reposPerPage && res.items.length > 0){
                            console.log("here")
                            getActions().getData(page + 1, token)
                        }else{
                            setStore({token:token})
                            return;
                        }
                    }).catch(error=>{
                        console.log(error)
                        setStore({isLoggedin:false})
                    })
            },
            getIssues:(issues_url, token)=>{
                fetch(issues_url, {
                    headers: {
                        "Authorization": `Token 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`
                    }
                })
                
                    // Parse the response as JSON
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        setStore({issues:res})
                    })
            },
        }
    };
}


export default getState;
