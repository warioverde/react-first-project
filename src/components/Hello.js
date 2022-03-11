const name = "Sebastian";
const displayMessage= ()=>{
    return 'I need help!'
}
/*function Hello(){ //functional component
    return <h1>Hello World!</h1>
}*/
const Hello = ()=><h1>Hello There {name}, {30-4}!, {displayMessage()}</h1>; //ES6 sintax
export default Hello;