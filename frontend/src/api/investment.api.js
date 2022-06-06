
const getInvestments= async(token,userId,type)=>{
    try{
        let response= await fetch(`/api/v1/invest/productbyType/${type}/${userId}`,{
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

const getInvestmentsbyId= async(token,userId,productId)=>{
    try{
        let response= await fetch(`/api/v1/invest/productbyId/${productId}/${userId}`,{
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

const makeInvestment= async(token,user,stock,name,type,quantity,total)=>{
    try{
        let response= await fetch("/api/v1/invest",{
            method: "POST",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
                authToken: "Bearer " + JSON.parse(token)
            },
            body: JSON.stringify({user,stock,name,type,quantity,total})
        });
        return await response.json();
    }catch(err){
        console.log(err);
    }
}



export {makeInvestment,getInvestments,getInvestmentsbyId};