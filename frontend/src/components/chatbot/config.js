import { createChatBotMessage } from "react-chatbot-kit";
//import Questions from "./questions";
import Levelzero from "./questionlevel/level.zero";
import Levelone from "./questionlevel/level.one";
import Kyc from "./action/Kyc";
import Avatar from "./Avatar";
import OrderStock from "./action/OrderStock"
import OrderId from "./action/OrderId"

const botName = "GrowwBot";
const config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(
            `Hello, I am ${botName}.`
        ),
        createChatBotMessage(
                   `I am here to help you with
                   FAQs. Questions will be displayed based on the page you are browsing. 
                   After you select an option, answer will be displayed and questions similar to the selected 
                   option will be followed.`,
            {
                widget: "levelzero",
            }
        ),
    ],
    state: {
        currentQues: [],
        ques_id: "",
        productType: "",
        productId:"",
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
            mapStateToProps: ["currentQues", "ques_id","productType","productId"],
        },
        {
            widgetName: "levelone",
            widgetFunc: (props) => <Levelone {...props} />,
            mapStateToProps: ["currentQues", "ques_id","productType","productId"],
        },
        {
            widgetName: "Kyc",
            widgetFunc: (props)=> <Kyc {...props}/>,
            mapStateToProps: ["currentQues", "ques_id","productType","productId"],
        },
        {
            widgetName: "investments",
            widgetFunc: (props)=> <OrderStock {...props}/>, //it is used to get all investment of stock,mutual-fund,FD respectively in cahtbot
            mapStateToProps: ["currentQues", "ques_id","productType","productId"],
        },
        {
            widgetName: "investmentsId",
            widgetFunc: (props)=> <OrderId {...props}/>, //it is used to get all investment by product Id in cahtbot
            mapStateToProps: ["currentQues", "ques_id","productType","productId"],
        },
    ],
    customComponents: {
        header: () => (
            <div
                style={{
                    backgroundColor: "rgb(255, 179, 58)",
                    color: "black",
                    height: "35px",
                    paddingTop: "8px",
                    paddingLeft: "7px",
                }}
            >
                GrowwBot
            </div>
        ),
        botAvatar: (props) => (
            <Avatar {...props}/>
        ),
    },
};

export default config;
