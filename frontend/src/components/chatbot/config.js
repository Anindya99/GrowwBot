import { createChatBotMessage } from "react-chatbot-kit";
//import Questions from "./questions";
import Levelzero from "./questionlevel/level.zero";
import Levelone from "./questionlevel/level.one";
import Leveltwo from "./questionlevel/level.two";

const config = {
  botName: "LearningBot",
  initialMessages: [createChatBotMessage(`Hello, I am GrowwBot. I am here to help you with
                   FAQs. Questions will be displayed based on the page you are browsing. 
                   After you select an option, answer will be displayed and questions similar to selected 
                   question will be followed.`,
                                        {
                                          widget: "levelzero",
                                        }),
                   ],
  state: {
      currentQues: [],
      ques_id:"",
  },   
  widgets: [
                /* {
                  widgetName: "getQuestions",
                  widgetFunc: (props) => <Questions {...props} />,
                  mapStateToProps:[
                    "currentQues",
                    "ques_id"
                  ]
                }, */
                {
                      widgetName: "levelzero",
                      widgetFunc: (props) => <Levelzero {...props} />,
                      mapStateToProps:[
                        "currentQues",
                        "ques_id"
                      ]
                },
                {
                  widgetName: "levelone",
                  widgetFunc: (props) => <Levelone {...props} />,
                  mapStateToProps:[
                    "currentQues",
                    "ques_id"
                  ]
                },
                {
                  widgetName: "leveltwo",
                  widgetFunc: (props) => <Leveltwo {...props} />,
                  mapStateToProps:[
                    "currentQues",
                    "ques_id"
                  ]
                },
           ],
  customComponents:{
            header: () => <div style={{ backgroundColor: 'rgb(255, 179, 58)',color:'black',height:'35px',
            paddingTop:'8px', paddingLeft:'7px' }}>GrowwBot</div>
          }         
        
}

export default config;