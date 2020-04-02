import React from 'react';
import { Droppable } from 'react-beautiful-dnd'
import { connect } from 'react-redux'

import TodosList from './TodosList'
import TodoAdd from './TodoAdd.js';
import ActionBar from './ActionBar.js';
import { todoDraggedToPosition } from './redux/index'


class TodoApp extends React.Component {
    getAlert() {
        alert('getAlert from Child');
    }
    render() {
        console.log(this.props.ref)
        return (
            <div>
                <br></br>
                <h1 className='header'>TodoApp</h1>
                <TodoAdd />
                <Droppable droppableId='TodoList'>
                {(provided) => (
                    <TodosList 
                    ref = {provided.innerRef}
                    provided={provided}
                    >{provided.placeholder}
                    </TodosList>
                )}
                </Droppable>
                <ActionBar />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const todoDraggedToPositionAction = todoDraggedToPosition()
  
  return {
      todoDraggedToPosition: (from, to) => dispatch({
          ...todoDraggedToPositionAction,
          fromPosition: from,
          toPosition: to
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);