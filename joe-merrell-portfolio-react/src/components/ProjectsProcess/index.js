import React from 'react';

function List(props) {
    return (
        <div className='row container-fluid mt-5'>
            <h5>Projects</h5>
      <ul className=" text-field container-fluid list-group">
        {props.repos.map(item => (
          <li className="basic col container-fluid basic px-2 mt-3" key={item.id}>
            <div className="basic container-fluid basic px-1">{item.name}</div>
            <div className="basic container-fluid basic px-1">{item.description}</div>
            <div><a href={item.deploy} className='link-light'>Link to deployed site</a></div>
            <div><a href={item.git} className='link-light'>Link to GitHub repository</a></div>
          </li>
        ))}
      </ul>
      </div>
    );
  }
  
  export default List;
  