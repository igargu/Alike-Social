import axios from 'axios';
const baseUrl = 'http://192.168.1.59:2000/'

// OBJECT -> {username, password, email}
const login = (credentials: Object) => {
    const finalUrl = baseUrl + 'signin'
    console.log(credentials)
    return new Promise(async (resolve) => {
        await axios.post(finalUrl, credentials).then(response => {
            resolve(response.data)
        })
    });
    // return axios.post(finalUrl, credentials)
}

// OBJECT -> {username, password, email}
const register = async (credentials: Object) => {
    const finalUrl = baseUrl + 'signup'
    console.log(credentials)
    return new Promise(async (resolve) => {
        await axios.post(finalUrl, credentials).then(response => {
            resolve(response.data)
        })
    });
}

//FALTA EL VERIFY TOKEN

export default { login, register }
