const FunctionalEvent = props =>{
    const handleClick = () => console.log('Button is clicked');
    return(
        <div>
           Functional Functional Event
           <button onClick={handleClick}>Click here</button>
        </div>
    );
}
export default FunctionalEvent;