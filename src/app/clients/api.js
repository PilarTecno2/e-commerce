
const get = async (url) =>{
    try {
        const res = await fetch(url)
        return res.json()
    } catch(err) {
        throw new Error(err)
    }    
} 

const post = async (url, body) => {
    try {
        const res = await fetch(url, {
            method: "post",
            body: body
        })
        return res.json()

    } catch(err) {
        throw new Error(err)
    }    
}

const api = {
    get: (url) => get(url),
    post: (url, body) => post(url, body) 
}



export default api;





