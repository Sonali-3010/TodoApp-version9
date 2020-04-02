import React from 'react'
import { connect } from 'react-redux'
import { DeleteButton, DoneButton, NotDoneButton, MarkImportantButton, MarkTrivialButton } from './buttons/CustomButtons'
import { deleteTask, markDone, markNotDone, markImportant, markTrivial } from './redux/index'

class Todo extends React.Component{
    render(){
        const task = this.props.todo.task
        const isComplete = this.props.todo.isComplete
        const isImportant = this.props.todo.isImportant
        const timeStamp = this.props.todo.timeStamp

        let text = isComplete ? <s>{task}</s> : task
        text = isImportant ? <strong>{text}</strong> : text
        let doneButton = <DoneButton onClick={this.props.markDone} />
        let notDoneButton = <NotDoneButton onClick={this.props.markNotDone} />
        let markImportantButton = <MarkImportantButton onClick={this.props.markImportant} />
        let markTrivialButton = <MarkTrivialButton onClick={this.props.markTrivial} />
        const { provided, innerRef } = this.props;

        // console.log(timeStamp)
        const textObj = <div className="TodoText">
            {text}
            <br></br>
            <div className="timeStamp">{date.getDate(timeStamp)}</div>
        </div>
        return (
        <div className="Todo" 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={innerRef}
        >
            <span>{isImportant ? markTrivialButton : markImportantButton}</span>
            <span>{textObj}</span>
            <span>{isComplete ? notDoneButton : doneButton}</span>
            <span><DeleteButton onClick={this.props.deleteTask} /></span>
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

const date = function(){
    let obj = {}
    // const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    obj.getDate = (d) => {
        return (days[d.getDay()]+" "+d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
    }
    return obj;
}()

export default connect(
    null, 
    mapDispatchToProps)
    (Todo);





//     return (
    //     <div className="Todo">
    //         {isImportant ? markTrivialButton : markImportantButton}
    //         {text}
    //         {isComplete ? notDoneButton : doneButton}
    //         <DeleteButton onClick={this.props.deleteTask} />
    //         <br></br>
    //         <div className="timeStamp">{date.getDate(timeStamp)}</div>
    //     </div>
    // )}


     //     return (
    //     <div className="Todo">
    //         {isImportant ? markTrivialButton : markImportantButton}</span>
    //         {textObj}</span>
    //         {isComplete ? notDoneButton : doneButton}</span>
    //         <DeleteButton onClick={this.props.deleteTask} /></span>
    //     </div>
    // )}

