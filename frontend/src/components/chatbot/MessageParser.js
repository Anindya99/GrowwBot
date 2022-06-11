class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      if(message.length){
        if(this.state.messages.length>2 && !this.state.questionStore.length) this.actionProvider.handleNoQues("Sorry, I have ran out of questions :( ");
        else this.actionProvider.handlePlanetext("I don't know how to answer that query !!! Please select one from the options below -");
      } 
    }
  }
  
  export default MessageParser;
  