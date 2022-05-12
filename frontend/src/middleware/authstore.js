import decode from 'jwt-decode';

const AuthStore = {
    isAuthenticated() {
        if (localStorage.jwtToken)
            return (decode(localStorage.jwtToken))
        else
          return false
    },
    storeJWT(jwtToken) {
        localStorage.setItem('jwtToken', JSON.stringify(jwtToken))
        console.log(decode(localStorage.jwtToken))
    },
    clearJWT() {
        localStorage.removeItem('jwtToken')
    }
}

export default AuthStore