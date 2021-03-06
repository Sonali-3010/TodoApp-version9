import React from 'react';
// import Button from './buttons/Button.js';
import { AddTaskButton } from './buttons/CustomButtons'
import { addTask } from './redux/index'
import { connect } from 'react-redux';

class TodoAdd extends React.Component {
    constructor(props){
      super(props);
      this.state = {task: ''};
      this.inputRef = React.createRef();
      this.handleChange = this.handleChange.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
      this.onAddTaskClick = this.onAddTaskClick.bind(this);
    }
    componentDidMount(){
      this.inputRef.current.focus();
    }
    handleChange(e) {
      this.setState({task: e.target.value});
    }
    onKeyDown(e) {
      // console.log("Pressed " + e.keyCode);
      if(e.keyCode === 13){
        this.onAddTaskClick();
      }
    }
    onAddTaskClick(){
      const task = this.state.task;
      if(task){
        this.setState({task: ''});
        this.props.addTask(task);
      }
      this.inputRef.current.focus();
    }
    render(){
      let task = this.state.task;
      return (
        <div className="TodoAdd">
          <input 
            value={task}
            type="text"
            ref={this.inputRef}
            className="InputField"
            placeholder="Enter Task"
            onChange={this.handleChange}
            onKeyDown={this.onKeyDown}
          />
          <AddTaskButton onClick={this.onAddTaskClick} />
        </div>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
      tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  const obj = addTask();
    return {
        addTask: (task) => dispatch({
          ...obj,
          task
        })
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (TodoAdd);