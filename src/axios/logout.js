import axios from "./axios"
import router from "../router/"

const logouts = () => {

    // this.delCookie(this.session_cookie)
    // this.delCookie(this.tocken_cookie)

    axios.post('/logout')
    .then( res => {
        localStorage.removeItem('x_xsrf_token')
        router.push({ name: 'login' })
        return res
    })
}

// function setCookie(c_name,value,expire) {
//     var date=new Date()
//     date.setSeconds(date.getSeconds()+expire)
//     document.cookie=c_name+ "="+escape(value)+"; expires="+date.toGMTString()
//     console.log(document.cookie)
// }

// function delCookie(c_name){
//     this.setCookie(c_name, "", -1)
// }

export{logouts}