import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

import './App.css';
import TodosList from './TodosList'
import TodoAdd from './TodoAdd.js';
import ActionBar from './ActionBar.js';



class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <div className='App'>
          <br></br>
          <h1 className='header'>TodoApp</h1>
          <TodoAdd />
          <TodosList />
          <ActionBar />
        </div>
      </Provider>
    )
  }
}

export default App;