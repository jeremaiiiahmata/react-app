import { useState } from "react";

//interface 
interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
} 

// destructuring the props and putting those values in the interface.
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {


    // Hook 
    const [click, setClick] = useState(-1);


  return ( // used in breaking the jsx into multiple lines.
    <>
    <h1>{heading}</h1>
    {items.length === 0 && <p>No item found</p>} 
      <ul className="list-group">
        {items.map((item, index) => (
            <li className={click === index 
                ? 'list-group-item active' 
                : 'list-group-item'} 
                
            key={item} onClick={() => 
                {
                setClick(index)
                onSelectItem(item);
                }
            }>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup; //export
