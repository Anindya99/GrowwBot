class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      this.actionProvider.handlePlanetext("I don't know how to answer that !!!!!");
    }
  }
  
  export default MessageParser;
  