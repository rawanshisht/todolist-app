import React, { Component } from 'react';
import { Button } from 'reactstrap';


const Task = (props) => {
    const style = {
        backgroundColor: 'white',
        color: 'black', 
        font: 'inherit',
      };
  
    if (props.task.done === true){
        style.backgroundColor = '#B2F97D';
    }
        return (   
            <tr style = {style}>
            <td > </td>
            <td > </td>
            <td >{props.task.name}</td>
            <td ><Button type="button" className="btn btn-xs btn-success img-circle" onClick={props.handleLike(props.task._id)} >&#x2713;</Button></td>
            <td><Button type="button" className="btn btn-xs btn-danger img-circle" onClick={props.handleDelete(props.task._id)} >&#xff38;</Button></td>
            </tr>
         )
}

export default Task;