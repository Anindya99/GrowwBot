
const getUser= async (token,id)=>{
    try{
        let response= await fetch(
            `/api/users/${id}`,{
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    authToken: "Bearer " + JSON.parse(token) 
                },
            });
        return await response.json();
    }catch(err){
        console.log(err);
    }
}

export {getUser};