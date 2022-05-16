//import Axios from 'axios'

const getDefault= async()=>{
    
    try {
        let response= await fetch("/api/questions/default",{
          method: "GET",
          headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        return await response.json();
      } catch(err){
        console.log(err);
      }     
};

const getAllbyId= async(id)=>{
  try {
    let response= await fetch(`/api/questions/all/${id}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch(err){
    console.log(err);
  }     
}

export {getDefault,getAllbyId};