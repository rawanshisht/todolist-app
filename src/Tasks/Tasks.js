import React, { Component } from 'react';
import Task from '../Task/Task';

class Tasks extends Component{
      
    render () {
  
        return (
            <div>
                <table className="table table-hover">

                    <thead>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                        <h5>
                        You've got {this.props.counter}to be done!
                            </h5>
                        <tr>
                            <th> </th>
                            <th> </th>
                            <th>Task</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody id="table_data">
                    {this.props.data.map(task =>{ 
                        return (
                                <Task task={task} handleDelete={this.props.handleDelete} handleLike={this.props.handleLike}/>
                                    );
                                    })}
                    </tbody>
                </table>
            </div>
        ) ;
    }
}

export default Tasks;

