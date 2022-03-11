import { Component } from 'react'
class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    this.duplicator = this.duplicator.bind(this);
    }
    increment= () =>{ //esta es una forma de hacer funciones
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    decrement(){ //esta es la otra forma de hacerlas
        this.setState({
            counter: this.state.counter - 1,
        });
    }
    duplicator(){
        this.setState({
            counter: this.state.counter * 2,
        });
    }
    render() {
        return (
        <div>
            <h3>Count value is: {this.state.counter}</h3>
            <button onClick={this.increment}>Increment</button>
            <button onClick={() => this.decrement()}>Decrement</button>
            <button onClick={this.duplicator}>Duplicate</button>
        </div>
        );
    }
}
export default Counter;