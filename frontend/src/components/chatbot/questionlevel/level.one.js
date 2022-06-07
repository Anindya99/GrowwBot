import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDefault, getAllbyId,getStock } from "../../../api/questions.api";
import AuthStore from "../../../middleware/authstore";
import Kyc from "../action/Kyc";
import "../questions.css";

const Levelone = (props) => {
    //console.log(props);
    const { setState } = props;

    const [qlist, setqlist] = useState([]); //store questions and corresponding answer and their children filled using
    const [load, setload] = useState(false);
    const [showList, setshowList] = useState(true);

    useEffect(() => {
        getAllbyId(props.ques_id).then((data) => {
            //console.log(data)
            setState((state) => ({ ...state, currentQues: data.children }));
        });
    }, []);
    //console.log(props.currentQues);
    if (props.currentQues.length && !load) setload(true);

    useEffect(() => {
        const flaglist = props.currentQues.map((qid) => {
            //console.log(qid);
            getAllbyId(qid).then((data) => {
                //console.log(data)
                setqlist((oldqlist) => [...oldqlist, data]);
            });
            return qid;
        });
        setqlist(qlist.sort());
    }, [load]);
    //console.log(qlist);

    //set the currentQues when default has been added its length greater than zero and create the ques answer list with id
    const questionsMarkup = qlist
        .sort((a, b) => {
            let fa = a.question.toLowerCase(),
                fb = b.question.toLowerCase();

            if (fa < fb) return -1;
            if (fa > fb) return 1;
            return 0;
        })
        .map((ques) => (
            <li
                className="question-list"
                key={ques._id}
                onClick={() => {
                    setState((state) => ({
                        ...state,
                        currentQues: [],
                        ques_id: ques._id,
                    }));
                    setshowList(false);
                    props.actionProvider.handleClientmsg(ques.question);
                    if(ques.hasOwnProperty('action')) {
                        //if kyc, then handleKyc
                        //if investments Stock/Mututal-Fund/Fixed-Deposit/all/Id, then handleInvestments(react component that will call respective orders)
                        //if get item, modify the answer by use the current stock id(stored in localstorage)- send answer and stock id 
                        //and get the relevant answer from backend then handlezero
                        //else handlezero
                        if(ques.action==='kyc') props.actionProvider.handleKyc(ques.answer);
                        else if(ques.action.split(" ")[0]==='get'){
                          
                          //getStock works for all types as we are sending the product type
                          //we are fetching entire stock(or MutualFund,FD) data using the id of the product
                          //here the productType should be same as routes defined in productController 
                          //(stocks/mutual-funds/fixed-deposits i.e. the productType we store in localStorage) 
                          getStock(localStorage.getItem("productID"),localStorage.getItem("productType")).then(val=>{
                              //console.log(val[`${ques.action.split(" ")[1]}`]);
                              const updAns= ques.answer.replace(`{${ques.action.split(" ")[1]}}`,val[`${ques.action.split(" ")[1]}`]);
                              props.actionProvider.handleLevelzero(updAns);
                            })
                        }
              
              
                        else if(ques.action.split(" ")[0]==='investments'){
              
                           //getting history of particular stock/fund/deposit
                           if(ques.action.split(" ")[1]==='Id'){
                            //here the productType should the type we stored in investment schema(here only used in output )
                            //(Stock/Mutual-Fund/Fixed-Deposit)
                             setState(state=>({...state,productType:ques.question.split(" ")
                                                                                 .slice(-2)[0].split("-")
                                                                                 .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
                                                                                 .join("-"),
                                                        productId:localStorage.productID}));
                             props.actionProvider.handleInvestmentsbyID(ques.answer); 
                            }
              
                           //getting all investment of particular type
                           else{
                             //here the productType should the type we stored in investment schema(also it is used as ouptut) 
                             //(Stock/Mutual-Fund/Fixed-Deposit)
                              setState(state=>({...state,productType:ques.action.split(" ")[1]}));
                              props.actionProvider.handleInvestments(ques.answer); 
                           }
                        }
              
                        else props.actionProvider.handleLevelzero(ques.answer);//just in case any action is not handled
                      
                      }



                      else props.actionProvider.handleLevelzero(ques.answer)

                }}
            >
                {ques.question}
            </li>
        ));

    return (
        <>
            {showList && (
                <ul className="questions-container">{questionsMarkup}</ul>
            )}
        </>
    );
};

export default Levelone;
