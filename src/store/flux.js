const getState = ({ getStore, setStore, getActions }) => {

    const reposPerPage = 30;
    return {
        store: {
            userData: null,
            isLoggedin: false,
            invalidCredentials: false,
            token: null,
            repos: [],
            issues: [],
            selectedRepo: null,
        },
        actions: {
            getToken: (token) => {
                setStore({ token: token })
            },
            getData: (page, token, user, navigate) => {
                fetch(`https://api.github.com/search/repositories?q=user:${user}&per_page=${reposPerPage}&page=${page}`, {
                    headers: { "Authorization": `Token ${token}` }
                })
                .then(res => res.json())
                .then(res => {
                    if (res.message === 'Bad credentials')
                        setStore({ invalidCredentials: true });
                    else {
                        setStore({
                            token: token,
                            repos: [...getStore().repos, ...res.items],
                            isLoggedin: true,
                            invalidCredentials: false,
                        });
                        if (res.total_count > reposPerPage && res.items.length > 0) {
                            getActions().getData(page + 1, token, user);
                        }
                        if (navigate) navigate('/home');
                    }
                }).catch(error => console.error(error));
            },
            getIssues: (issues_url, token, repoName) => {
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
                    setStore({
                        issues: result,
                        selectedRepo: repoName
                    });
                }).catch(error => {
                    console.log(error)
                })
            },
        }
    };
}


export default getState;
