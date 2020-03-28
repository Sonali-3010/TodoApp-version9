import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'


String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

class TodosList extends React.Component{
    render(){
        const tasksList = this.props.tasks
        const tasksCollection = tasksList.map((todo, index) => (
            <li key={todo.task.toLowerCase().hashCode()}>
                <Todo index={index} todo={todo}/>
            </li>
        ))
        return (
        <div>
            <ul>{tasksCollection}</ul></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TodosList);