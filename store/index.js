import axios from "axios"

export const state = () => ({
    priceLoaded: [],
    workLoaded: [],
    blogLoaded: [],
    commentsLoaded: [],
    serviceLoaded: [],
    token : null
})
export const mutations = {
    //price
    addPriceMut(state, price){
        state.priceLoaded.push(price)
    },
    setPrice(state, PriceArray){
        state.priceLoaded = PriceArray
    },
    editPricer(state, priceEdit){
        const Priceindex = state.priceLoaded.findIndex( price => price.id === priceEdit.id)
        state.priceLoaded[Priceindex] = priceEdit
    },
    //Work
    addWorkMut(state,work){
        state.workLoaded.push(work)
    },
    setWork(state, WorkArray){
        state.workLoaded = WorkArray
    },
    editWorkr(state, workEdit){
        const workIndex = state.workLoaded.findIndex( work => work.id === workEdit.id)
        state.workLoaded[workIndex] = workEdit
    },
    //blog
    addPostMut(state, post){
        state.blogLoaded.push(post)
    },
    setPost(state, BlogArray){
        state.blogLoaded = BlogArray
    },
    editPostr(state, postEdit){
        const postIndex = state.blogLoaded.findIndex( post => post.id === postEdit.id)
        state.blogLoaded[postIndex] = postEdit
    },
    //services
    setServices(state, ServicesArray){
        const sortServices = ServicesArray.slice(1,5)
        state.serviceLoaded = sortServices
    },
    //comments
    addComment(state, comment){
        console.log(comment)
        state.commentsLoaded.push(comment)
    },
    setToken(state, token){
        state.token = token
    }
}
export const actions = {
    //Price
    priceInite({commit}, price){
        return axios.get('https://sooarch-46978-default-rtdb.firebaseio.com/prices.json')
        .then(res => {
            const PriceArray = []
            for(let key in res.data){
                PriceArray.push({...res.data[key], id: key})
            }
            commit('setPrice', PriceArray)
        })
        .catch(e => {
            console.log(e)
        })
    },
    addPrice({commit}, price) {
        return axios.post('https://sooarch-46978-default-rtdb.firebaseio.com/prices.json', price)
        .then(res => {
            commit('addPriceMut', {...price, id: res.data.name})
        })
        .catch(e => console.log(e))
    },
    editPrice({commit}, price){
        return axios.put(`https://sooarch-46978-default-rtdb.firebaseio.com/prices/${price.id}.json`, price)
        .then(res => {
            commit('editPricer', price)
        })
        .catch(e => {
            console.log(e)
        })
    },
    //Work
    workInite({commit}, work){
        return axios.get('https://sooarch-46978-default-rtdb.firebaseio.com/works.json')
        .then(res => {
            const WorkArray = []
            for(let key in res.data){
                WorkArray.push({...res.data[key], id: key})
            }
            commit('setWork', WorkArray)
        })
        .catch(e => {
            console.log(e)
        })
    },
    addWork({commit}, work) {
        return axios.post('https://sooarch-46978-default-rtdb.firebaseio.com/works.json', work)
        .then(res => {
            commit('addWorkMut', {...work, id: res.data.name})
        })
        .catch(e => console.log(e))
    },
    editWork({commit}, work){
        return axios.put(`https://sooarch-46978-default-rtdb.firebaseio.com/works/${work.id}.json`, work)
        .then(res => {
            commit('editWorkr', work)
        })
        .catch(e => {
            console.log(e)
        })
    },
    //blog
    blogInite({commit}, post){
        return axios.get('https://sooarch-46978-default-rtdb.firebaseio.com/blog.json')
        .then(res => {
            const BlogArray = []
            for(let key in res.data){
                BlogArray.push({...res.data[key], id: key})
            }
            commit('setPost', BlogArray)
        })
        .catch(e => {
            console.log(e)
        })
    },
    addPost({commit}, post) {
        return axios.post('https://sooarch-46978-default-rtdb.firebaseio.com/blog.json', post)
        .then(res => {
            commit('addPostMut', {...post, id: res.data.name})
        })
        .catch(e => console.log(e))
    },
    editPost({commit}, post){
        return axios.put(`https://sooarch-46978-default-rtdb.firebaseio.com/blog/${post.id}.json`, post)
        .then(res => {
            commit('editPostr', post)
        })
        .catch(e => {
            console.log(e)
        })
    },
    //services
    servicesInite({commit}, service){
        return axios.get('https://sooarch-46978-default-rtdb.firebaseio.com/services.json')
        .then(res => {
            const ServicesArray = []
            for(let key in res.data){
                ServicesArray.push({...res.data[key], id: key})
            }
            commit('setServices', ServicesArray)
        })
        .catch(e => {
            console.log(e)
        })
    },
    //Comments
    addComment({commit}, comment){
        return axios.post('https://sooarch-46978-default-rtdb.firebaseio.com/comments.json', comment)
        .then(res => {
            commit('addComment', { ...comment, id: res.data.name})
        })
        .catch(e => console.log(e))
    },
    //authUser
    authUser({commit}, authData){
        const key = 'AIzaSyAGEOrHZ2aAacepuzt5aOHIdoO8UWIkJ-g'
        return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        })
        .then((res) => {
            commit('setToken', res.data.idToken)
        })
        .catch(e => console.log(e))

    }
}
export const getters = {
    getPrice(state){
        return state.priceLoaded
    },
    getWork(state){
        return state.workLoaded
    },
    getBlog(state){
        return state.blogLoaded
    },
    getServices(state){
        return state.serviceLoaded
    },
    checkAuthUser(state){
        return state.token !=null
    }
}