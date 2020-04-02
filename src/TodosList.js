import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd';

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
        const { provided, innerRef } = this.props;
        const tasksList = this.props.tasks
        const tasksCollection = tasksList.map((todo, index) => {
            const key = todo.task.toLowerCase().hashCode()
            return (
                <li key={key}>
                    <Draggable draggableId={key.toString()} index={index}>
                        {(provided) => (
                            <Todo index={index} todo={todo} key={key} provided={provided} innerRef={provided.innerRef}/>
                    )}
                    </Draggable>
                </li>
            )
        })
        return (
        <div>
            <ul provided={provided} ref={provided.innerRef}>{tasksCollection}</ul>
            {this.props.children}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TodosList);