// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  //(item:string) => void
  onSelectItem: (item: string) => void;  
}

import { Fragment, useState } from "react";

function ListGroup({ items, heading, onSelectItem}: Props) {
 
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => { setSelectedIndex(index);
            onSelectItem(item); }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
