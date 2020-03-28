import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { deleteTask, markDone, markNotDone } from './redux/index'

class Todo extends React.Component{
    render(){
        const task = this.props.todo.task
        const isComplete = this.props.todo.isComplete
        let text = isComplete ? <s>{task}</s> : task;
        let deleteButton = <Button 
            displayText="Delete" 
            className="TodoButton" 
            onClick={this.props.deleteTask} 
        />
        let doneButton = <Button 
            displayText="Done" 
            className="TodoButton" 
            onClick={this.props.markDone} 
        />
        let notDoneButton = <Button 
            displayText="Not-Done" 
            className="TodoButton" 
            onClick={this.props.markNotDone} 
        />
        return (
        <div className="Todo">
            {text}
            {isComplete ? notDoneButton : doneButton}
            {deleteButton}
        </div>
    )}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const deleteAction = deleteTask()
    const markDoneAction = markDone()
    const markNotDoneAction = markNotDone()
    
    return {
        deleteTask: () => dispatch({
            ...deleteAction,
            index: ownProps.index
        }),
        markDone: () => dispatch({
            ...markDoneAction,
            index: ownProps.index
        }),
        markNotDone: () => dispatch({
            ...markNotDoneAction,
            index: ownProps.index
        })
    }
}

export default connect(
    null, 
    mapDispatchToProps)
    (Todo);