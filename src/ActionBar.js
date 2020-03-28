import React from 'react';
import Button from './Button.js';
import { connect } from 'react-redux';
import { markAllDone, deleteIncomplete, deleteCompleted, deleteAll } from './redux/index'

class ActionBar extends React.Component {
    render(){
      return (
        <div className="ActionBar">
        <Button
          className="ActionBarButton"
          displayText="Mark All Tasks Done"
          onClick={this.props.markAllDone}
        />
        <Button
          className="ActionBarButton"
          displayText="Delete Incomplete Tasks"
          onClick={this.props.deleteIncomplete}
        />
        <Button
          className="ActionBarButton"
          displayText="Delete Complete Tasks"
          onClick={this.props.deleteCompleted}
        />
        <Button
          className="ActionBarButton"
          displayText="Delete All Tasks"
          onClick={this.props.deleteAll}
        />
        </div>
      );
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        markAllDone : () => dispatch(markAllDone()),
        deleteIncomplete : () => dispatch(deleteIncomplete()),
        deleteCompleted : () => dispatch(deleteCompleted()),
        deleteAll : () => dispatch(deleteAll()),
    }
}

export default connect(null, mapDispatchToProps)(ActionBar);