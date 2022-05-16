//This currently has no use. Later try putting everything in one file rather than using levels(questionlevel) for each message    

import React, { useEffect,useState } from 'react'
import {  useLocation } from 'react-router-dom';
import { getDefault,getAllbyId } from '../../api/questions.api';
import AuthStore from '../../middleware/authstore';
import "./questions.css";

const Questions = (props) => {
  
  //console.log(props);  
  const {setState}= props;
  const location = useLocation();  
  const loggedin= AuthStore.isAuthenticated()? true:false;
  let kyc= false;
  if(loggedin){
      kyc= true;//this need to be changed, fetch user info 
  }

  
  const [qlist,setqlist]= useState([]);//store questions and corresponding answer and their children filled using 

  useEffect(()=>{
   
      if(!props.currentQues.length){
          //console.log(location.pathname)
          getDefault().then( data=>{
                //console.log(data);
                const quesidList= data.filter((d)=>{
                    //console.log(d['kyc'])
                    return d['routeName']===location.pathname && d['kyc']===kyc 
                });
                setState(state=>({...state,currentQues:quesidList[0]['qlist']})) //setState is a member of the props  
                
          })
          
      }
      else{
                getAllbyId(props.ques_id).then(data=>{
                  //console.log(data)
                  setState(state=>({...state,currentQues:data.children}))
                })
      }
  },[]);
  //console.log(props.currentQues);

 useEffect(()=>{
    setqlist([])
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
    const questionsMarkup = qlist.map((ques) => (
    <li
      className="question-list"
      key={ques._id}
      onClick={()=>{
        setState(state=>({...state,ques_id:ques._id}))
        props.actionProvider.handleQuestion(ques.answer)
      }}
      
    >
      {ques.question}
    </li>
  ));

  return <ul className="questions-container" >{questionsMarkup}</ul>;  
};

export default Questions;