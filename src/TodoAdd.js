import React from 'react';
import { addTask } from './redux/index'
import { connect } from 'react-redux';
import { AddTaskButton } from './buttons/CustomButtons'

class TodoAdd extends React.Component {
    constructor(props){
      super(props);
      this.state = {task: ''};
      this.inputRef = React.createRef();
    }
    componentDidMount = () => { this.focusInput(); }
    focusInput = () => { this.inputRef.current.focus(); }
    handleChange = (e) => { this.setState({task: e.target.value}); }
    onKeyDown = (e) => { if(e.keyCode === 13){this.onAddTaskClick();} }
    onAddTaskClick = () => {
      const task = this.state.task;

      if(task){
        const timeStamp = new Date()
        this.setState({task: ''});
        this.props.addTask(task, timeStamp);
      }
      this.focusInput()
    }
    render(){
      let task = this.state.task;
      return (
        <div className="TodoAdd">
          <input 
            value={task} type="text" ref={this.inputRef} className="InputField" placeholder="Enter Task"
            onChange={this.handleChange} onKeyDown={this.onKeyDown}
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
        addTask: (task, timeStamp) => dispatch({
          ...obj,
          task,
          timeStamp
        })
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (TodoAdd);