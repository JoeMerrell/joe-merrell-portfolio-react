import React from 'react';

function List(props) {
    return (
      <ul className="list-group">
        {props.repos.map(item => (
          <li className="" key={item.id}>
            
            <div>{item.name}</div>
            <div>{item.git}</div>
            <div>{item.deploy}</div>
            <div>{item.description}</div>
          </li>
        ))}
      </ul>
    );
  }
  
  export default List;
  