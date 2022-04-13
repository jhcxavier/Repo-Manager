const getState = ({ getStore, setStore, getActions }) => {

    const reposPerPage = 30;
    return {
        store: {
            invalidToken: false,
            userData: null,
            isLoggedin: false,
            token: "",
            repos: [],
            issues: []
        },
        actions: {
            getToken: (token) => {
                setStore({ token: token })
            },
            getData: (page, token, user) => {
                
                fetch(`https://api.github.com/search/repositories?q=user:${user}&per_page=${reposPerPage}&page=${page}`, {
                    headers: {
                        "Authorization": `Token ${token}`
                    }
                })
                .then(res => res.json())
                .then(res => {
                    setStore({ token: token })
                    setStore({ repos: [...getStore().repos, ...res.items] })
                    setStore({ isLoggedin: true })
                    if (res.total_count > reposPerPage && res.items.length > 0) {
                        getActions().getData(page + 1, token, user)
                    } else {
                        return;
                    }
                }).catch(error => {
                    window.location.href = "http://localhost:3002/"
                    console.log(error)
                    setStore({ isLoggedin: false })

                })
            },
            getIssues: (issues_url, token) => {
                fetch(issues_url, {
                    headers: {
                        "Authorization": `Token ${token}`
                    }
                })
                .then(res => res.json())
                .then(res => {
                    const result = res.map((e)=>{
                        e.id = e.id.toString()
                        return e
                    })
                    setStore({ issues: result })
                }).catch(error => {
                    console.log(error)
                })
            },
        }
    };
}


export default getState;
