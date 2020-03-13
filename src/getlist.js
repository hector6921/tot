import React from 'react'



const GetList = (props) => {
  console.log(props);
return(

    <ul>
      <li key={props.index} >{props.todo} <button onClick={() => props.Delete(props.index)}>Delete</button></li>
    </ul>
);

};

export default GetList;
