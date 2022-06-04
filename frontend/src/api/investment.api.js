const investStock= async(token,user,stock,quantity,total)=>{
    try{
        let response= await fetch("/api/v1/orders",{
            method: "POST",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
                authToken: "Bearer " + JSON.parse(token)
            },
            body: JSON.stringify({user,stock,quantity,total})
        });
        return await response.json();
    }catch(err){
        console.log(err);
    }
}

export {investStock};