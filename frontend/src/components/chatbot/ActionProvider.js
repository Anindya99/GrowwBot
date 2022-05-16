class ActionProvider {
  constructor(
   createChatBotMessage,
   setStateFunc,
 ) {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
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
      widget: "leveltwo",
    }
  );
  this.updateChatbotState(message);
};
handleLeveltwo = (answer) => {
  const message = this.createChatBotMessage(
    `${answer}`,
    /* {
      widget: "level-two",
    } */
  );
  this.updateChatbotState(message);
};

}

export default ActionProvider;