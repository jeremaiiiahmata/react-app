
// PascalCasing -- Always Capitalise the first letter of the name of the function 
function Message(){

    const name = "Jerem";
    // JSX : Javascript XML
    
    if (name) { // checks if the name has a value
        return <h1>Hello, {name}</h1>; // this will return if the name is true.
    } else { 
        return <h1>Hello World!</h1> // this will return if the name is false.
    }
  


}

export default Message;