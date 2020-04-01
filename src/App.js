import React from 'react'
import { Provider, connect } from 'react-redux'
import { store } from './redux/store.js'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Backend from 'react-dnd-html5-backend'

import './App.css';
import TodosList from './TodosList'
import TodoAdd from './TodoAdd.js';
import ActionBar from './ActionBar.js';



class App extends React.Component {
  onDragEnd = (result) => {
    const { destination, source, draggableID } = result
    if(!destination){ return }
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ){ return }


  }

  render(){
    return (
      <Provider store={store}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className='App'>
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
        </DragDropContext>
      </Provider>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(App);