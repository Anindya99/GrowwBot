import React, { useEffect,useState } from 'react'
import {  useLocation } from 'react-router-dom';
import { getDefaultQlist,getAllbyId } from '../../../api/questions.api';
import { getUser } from '../../../api/users.api';
import AuthStore from '../../../middleware/authstore';
import "../questions.css";

const Levelzero = (props) => {
  
  const [currUser,setUser]=useState({})
  
  //console.log(props);  
  const {setState}= props;
  const location = useLocation();  
  const loggedin= AuthStore.isAuthenticated();
  const token = localStorage.getItem("jwtToken");
  

  const [qlist,setqlist]= useState([]);//store questions and corresponding answer and their children filled using 
  //const [load,setload]= useState(false);
  const[showList,setshowList]= useState(true);

  useEffect(()=>{
      if(loggedin){
        //console.log(token);
        getUser(token,loggedin._id).then(val=>{
          //console.log(val);
          setUser({...val});
          //setload(true);
        }) 
      }
      else {setUser({kyc:false});}
  },[]);

  useEffect(()=>{
   
         
      if (typeof currUser.kyc !== 'undefined') {
                getDefaultQlist(location.pathname,currUser.kyc).then( data=>{
                  //console.log(data);
                  setState(state=>({...state,currentQues:data}));
                  //setState is a member of the props 

            })
      }
          
  },[currUser]);
  //console.log(props.currentQues);
  //if(props.currentQues.length && !load) setload(true);

 useEffect(()=>{
    setqlist([]);
    const flaglist= props.currentQues.map((qid)=>{
      //console.log(qid);
      getAllbyId(qid).then(data=>{
        //console.log(data)
        setqlist(oldqlist=>[...oldqlist,data]);
      })
      return qid;
    })

  },[props.currentQues]);
  //console.log(qlist);

  //set the currentQues when default has been added its length greater than zero and create the ques answer list with id
    const questionsMarkup = qlist.sort((a, b) => {

                  let fa= a.question.toLowerCase(),
                      fb= b.question.toLowerCase();
              
                  if(fa<fb) return -1;
                  if(fa>fb) return 1;
                  return 0; 
              }   

    )
    .map((ques) => (
    <li
      className="question-list"
      key={ques._id}
      onClick={()=>{
        setState(state=>({...state,currentQues:[],ques_id:ques._id}))
        setshowList(false)
        props.actionProvider.handleClientmsg(ques.question)
        props.actionProvider.handleLevelzero(ques.answer)
      }}
      
    >
      {ques.question}
    </li>
  ));

  return (
    <>
      {showList && <ul className="questions-container" >{questionsMarkup}</ul> }
    </>
  ); 
};

export default Levelzero;