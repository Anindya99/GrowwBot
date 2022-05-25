import decode from "jwt-decode";
//import { verify } from "../api/verify.api";
//import Cookies from "js-cookie";

const AuthStore = {
     isAuthenticated() {
        if (localStorage.jwToken) {
            return decode(localStorage.jwToken);
        } else return false;
    },
    storeJWT(jwToken) {
        localStorage.setItem("jwToken", JSON.stringify(jwToken));
        //Cookies.remove("jwt");
    },
    clearJWT() {
        localStorage.removeItem("jwToken");
        //console.log(localStorage);
    },
    getUserDetail() {
        return decode(localStorage.jwToken);
    },
};

export default AuthStore;
