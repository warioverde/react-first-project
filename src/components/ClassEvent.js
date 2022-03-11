import { Component } from "react";
class ClassEvent extends Component{
    handleClick(){
        console.log("Clase base event Handling")
    }
    render(){
        return(
            <div>
                This is a class base component
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
}
export default ClassEvent;