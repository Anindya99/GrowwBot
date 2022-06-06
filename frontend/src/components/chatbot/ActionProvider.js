class ActionProvider {
  constructor(
   createChatBotMessage,
   setStateFunc,
   createClientMessage,
 ) {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
   this.createClientMessage= createClientMessage;
 }

 /* handleQuestion = (answer) => {
  const message = this.createChatBotMessage(
    `${answer}`,
    {
      widget: "getQuestions",
    }
  );
  
  this.updateChatbotState(message);
}; */
updateChatbotState(message) {
  // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. 
  //The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

  this.setState((prevState) => ({
    ...prevState,
    messages: [...prevState.messages, message],
  }));
}
handleClientmsg= (question)=>{
  const message= this.createClientMessage(
    `${question}`
  );
  this.updateChatbotState(message);
}

handleLevelzero = (answer) => {
  const message = this.createChatBotMessage(
    `${answer}`,
    {
      widget: "levelone",
    }
  );
  this.updateChatbotState(message);
};

handleLevelone = (answer) => {
  const message = this.createChatBotMessage(
    `${answer}`,
    {
      widget: "levelone",
    }
  );
  this.updateChatbotState(message);
};

handleKyc= (answer)=>{
  const message = this.createChatBotMessage(
    `${answer}`,
    {
      widget: "Kyc",
    }
  );
  this.updateChatbotState(message);
};
handleInvestments= (answer)=>{
  const message = this.createChatBotMessage(
    `${answer}`,
    {
      widget: "investments",
    }
  );
  this.updateChatbotState(message);
};
handleInvestmentsbyID=(answer)=>{
  const message= this.createChatBotMessage(
    `${answer}`,
    {
      widget: "investmentsId",
    }
  );
  this.updateChatbotState(message);
}

}

export default ActionProvider;