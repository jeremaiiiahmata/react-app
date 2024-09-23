import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App(){ // creates a function that displays the <Message /> component

  const [alertVisibility, setAlertVisibility] = useState(false);

  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
];

const handleSelectItem = (item: string) => {
  console.log(item)
} 
  return(
    <>
      <div>
        { alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>
          Hello, <em>World!</em>
        </Alert> }
        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
        <Button color="dark" onClick={() => setAlertVisibility(true)}> Click! </Button>
      </div>
    </>
  )
}

export default App;