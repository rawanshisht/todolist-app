import React, { Component } from 'react';
import { Button, Row, Col, CardBody, FormGroup } from 'reactstrap';


class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
                input_task:""
                    }
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);

    }

    handleChange(event) {
        this.setState({input_task: event.target.value});
    }
    reset(event){
        event.preventDefault();
        if(event.target.name==="submit"){
            this.props.handleSubmit(this.state.input_task);
            
        }
        this.setState(
                    { 
                        input_task: ''
                    }
                    );
    }
    render () {
  
        return (
            <div>
                <br/>
                <br/>
                <br/>
            <div className="form-group">
							<label htmlFor="task" className="col-md-2 control-label">Task</label>
							<div className="col-md-10">
                                <input type="text" id="task" ref="task" className="form-control" placeholder="What do you need to do?"
                                 value={this.state.input_task} onChange={this.handleChange}/>
							</div>
						</div>
						
                        <div className="col-md-10">
                            <button name="submit" className="btn btn-success" onClick={this.reset}>Add Task</button>
							</div>
						
            </div>
     ) ;
    }
    }

export default Form;