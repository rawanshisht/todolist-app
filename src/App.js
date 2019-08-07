import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Tasks from './Tasks/Tasks';
import Task from './Task/Task';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 3,
        tasks:[
          { 
            name: "Shopping"
          },
          {
            name: "Book"
          },
          {
            name: "Study"
          }
        ]
        };
    }
    
    componentDidMount(){
      var ID = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
      };
      const array = [...this.state.tasks];
      for (let i =0; i<array.length; i++){
          array[i]._id = ID();
          array[i].done = false;
      }
     this.setState({tasks: array});
    }
    
    handleSubmit  = (newTask)=> {
      var ID = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
      };
      const temp_id = ID();
      const array = [...this.state.tasks];
      array.push({name:newTask, _id: temp_id});
      this.setState({ tasks: array, _id: temp_id});
      let counter2 = this.state.counter;
      counter2 += 1;
      this.setState({counter: counter2}); 
    }
    
    handleDelete = (id) => (event) => {
      event.preventDefault();
      const array = this.state.tasks;
      const filtered = array.filter(function(obj){
        return obj._id !== id;
      });
      this.setState({tasks:filtered});
      let counter2 = this.state.counter;
      counter2 -= 1;
      this.setState({counter: counter2}); 
    }
    
    handleLike =(id) => (event)=>{
      event.preventDefault();
      const array = [...this.state.tasks];
      const index = array.findIndex(ele => ele._id === id)
      array[index].done= !array[index].done;
      this.setState({tasks: array});    
  }
  render() {
    return (
      <div>
      <Form handleSubmit={this.handleSubmit}/>
      <Tasks data ={this.state.tasks} handleDelete={this.handleDelete} counter={this.state.counter} handleLike={this.handleLike}/>
      </div>
    );
  }
}

export default App;
