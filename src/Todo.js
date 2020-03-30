import React from 'react'
import { connect } from 'react-redux'
import { DeleteButton, DoneButton, NotDoneButton, MarkImportantButton, MarkTrivialButton } from './buttons/CustomButtons'
import { deleteTask, markDone, markNotDone, markImportant, markTrivial } from './redux/index'

class Todo extends React.Component{
    render(){
        const task = this.props.todo.task
        const isComplete = this.props.todo.isComplete
        const isImportant = this.props.todo.isImportant

        let text = isComplete ? <s>{task}</s> : task
        text = isImportant ? <strong>{text}</strong> : text
        let doneButton = <DoneButton onClick={this.props.markDone} />
        let notDoneButton = <NotDoneButton onClick={this.props.markNotDone} />
        let markImportantButton = <MarkImportantButton onClick={this.props.markImportant} />
        let markTrivialButton = <MarkTrivialButton onClick={this.props.markTrivial} />

        return (
        <div className="Todo">
            {isImportant ? markTrivialButton : markImportantButton}
            {text}
            {isComplete ? notDoneButton : doneButton}
            <DeleteButton onClick={this.props.deleteTask} />
        </div>
    )}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const deleteAction = deleteTask()
    const markDoneAction = markDone()
    const markNotDoneAction = markNotDone()
    const markImportantAction = markImportant()
    const markTrivialAction = markTrivial()
    
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
        }),
        markImportant: () => {
            return dispatch({
                ...markImportantAction,
                index: ownProps.index
            })
        },
        markTrivial: () => dispatch({
            ...markTrivialAction,
            index: ownProps.index
        })
    }
}

export default connect(
    null, 
    mapDispatchToProps)
    (Todo);