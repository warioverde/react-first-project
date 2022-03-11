import {Component} from "react"; //class component
class Message extends Component{
    render(){
        return <h1>This is a class Component {this.props.messageContent}, {this.props.messageCode}</h1>
    }
}
export default Message;