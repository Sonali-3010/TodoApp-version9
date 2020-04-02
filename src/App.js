import React from 'react'

import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { DragDropContext } from 'react-beautiful-dnd'

import './App.css';
import TodoApp from './TodoApp.js';

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.child = React.createRef();
  }

  onDragEnd = (result) => {
    const { destination, source, draggableID } = result
    if(!destination){ return }
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ){ return }

    console.log('Drag ended.')
    console.log(this.child)
    this.child.current.getAlert()
  }

  render(){
    return (
      <Provider store={store}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className='App'>
            <TodoApp ref={this.child}/>
          </div>
        </DragDropContext>
      </Provider>
    )
  }
}

export default App