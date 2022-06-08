import decode from "jwt-decode";
//import { verify } from "../api/verify.api";
//import Cookies from "js-cookie";

const AuthStore = {
     isAuthenticated() {
        try{
            if (localStorage.jwToken) {
                return decode(localStorage.jwToken);
            } else return false;
        }catch(err){
            console.log(err);
        }
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
        try{
            return decode(localStorage.jwToken);
        }catch(err){
            console.log(err)
        }
        
    },
};

export default AuthStore;
