import React, { useEffect,useState } from 'react'
import {  useLocation } from 'react-router-dom';
import { getDefaultQlist,getAllbyId } from '../../../api/questions.api';
import { getUser } from '../../../api/users.api';
import AuthStore from '../../../middleware/authstore';
import { verify } from '../../../api/verify.api';
import "../questions.css";

const Levelzero = (props) => {
  
  const [currUser,setUser]=useState({})
  
  //console.log(props);  
  const {setState}= props;
  const location = useLocation();  
  const loggedin= AuthStore.isAuthenticated();
  const token = localStorage.getItem("jwToken");
  

  const [qlist,setqlist]= useState([]);//store questions and corresponding answer and their children filled using 
  //const [load,setload]= useState(false);
  const[showList,setshowList]= useState(true);

  useEffect(()=>{
    if(localStorage.getItem("jwToken")){
      verify(localStorage.getItem("jwToken")).then(res=>{
          if(res.msg==='verified'){
              getUser(token,loggedin._id).then(val=>{
                //console.log(val);
                setUser({...val});
                //setload(true);
              }) 
          }
          else{
            AuthStore.clearJWT();
            window.location.href = "/";
          }
        })
        
      } 
      else {
        setUser({kyc:false});
      }
  },[]);

  useEffect(()=>{
   
         
      if (typeof currUser.kyc !== 'undefined') {
                getDefaultQlist(location.pathname,currUser.kyc).then( data=>{
                  //console.log(data);
                  if(!data.hasOwnProperty('msg')) setState(state=>({...state,currentQues:data}));
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
        if(ques.hasOwnProperty('action')) {
          //if kyc, then handleKyc
          //if orders stocks/mutual-fund/fixed-deposit/all, then handleOrders(react component that will call respective orders)
          //if get item, modify the answer by use the current stock id(stored in localstorage)- send answer and stock id 
          //and get the relevant answer from backend then handlezero
          //else handlezero
          if(ques.action==='kyc') props.actionProvider.handleKyc(ques.answer);
        }
        else props.actionProvider.handleLevelzero(ques.answer)
      
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