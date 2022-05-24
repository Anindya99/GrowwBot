import decode from "jwt-decode";
//import Cookies from "js-cookie";

const AuthStore = {
    isAuthenticated() {
        if (localStorage.jwtToken) {
            return decode(localStorage.jwtToken);
        } else return false;
    },
    storeJWT(jwtToken) {
        localStorage.setItem("jwtToken", JSON.stringify(jwtToken));
        //Cookies.remove("jwt");
    },
    clearJWT() {
        localStorage.removeItem("jwtToken");
        //console.log(localStorage);
    },
    getUserDetail() {
        return decode(localStorage.jwtToken);
    },
};

export default AuthStore;
