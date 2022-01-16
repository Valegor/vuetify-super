import Axios from 'axios'
//import router from '../router/index'

// const baseURL = 'http://laravel-super.loc:8888/'

const axios = Axios.create({
	// baseURL,
	timeout: 10000,
	withCredentials: true
})

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// axios.interceptors.response.use({}, err => {

//     // console.log(err.response)

//     if(err.response.status === 401 || err.response.status === 419){
//         const token = localStorage.getItem('x_xsrf_token')
//         if(token){
//             localStorage.removeItem('x_xsrf_token')
//         }
//         router.push({ name: 'user.login' })
//     }
// })




export default axios

