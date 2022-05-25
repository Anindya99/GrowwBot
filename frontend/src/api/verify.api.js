
const verify= async (token)=>{
    try{
        let response= await fetch(
            "/api/verify/token",
            {
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    authToken: "Bearer " + JSON.parse(token) 
                },
            }
            
        );
        return await response.json();
    }catch(err){
        console.log(err);
        return false;
    }
}

export {verify};