import React, { useEffect,useState } from 'react'
import {  useLocation } from 'react-router-dom';
import { getDefault,getAllbyId } from '../../../api/questions.api';
import AuthStore from '../../../middleware/authstore';
import "../questions.css";

const Levelzero = (props) => {
  
  //console.log(props);  
  const {setState}= props;
  const location = useLocation();  
  const loggedin= AuthStore.isAuthenticated()? true:false;
  let kyc= false;
  if(loggedin){
      kyc= true;//this need to be changed, fetch user info 
  }

  const [qlist,setqlist]= useState([]);//store questions and corresponding answer and their children filled using 
  const [load,setload]= useState(false);
  const[showList,setshowList]= useState(true);

  useEffect(()=>{
   
          //console.log(location.pathname)
          getDefault().then( data=>{
                console.log(data);
                const quesidList= data.filter((d)=>{
                    console.log(d)
                    return d['routeName']===location.pathname && d['kyc']===kyc 
                });
                setState(state=>({...state,currentQues:quesidList[0]['qlist']})) //setState is a member of the props  
                
          })
          
  },[]);
  console.log(props.currentQues);
  if(props.currentQues.length && !load) setload(true);

 useEffect(()=>{
   
    const flaglist= props.currentQues.map((qid)=>{
      //console.log(qid);
      getAllbyId(qid).then(data=>{
        //console.log(data)
        setqlist(oldqlist=>[...oldqlist,data]);
      })
      return qid;
    }) 
  },[load]);
  //console.log(qlist);

  //set the currentQues when default has been added its length greater than zero and create the ques answer list with id
    const questionsMarkup = qlist.map((ques) => (
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