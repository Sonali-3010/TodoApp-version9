import React from 'react';

class Button extends React.Component {
    handleClick = () => {
      this.props.onClick();
    }
    render(){
      return (
        <button 
          className={this.props.className} 
          onClick={this.handleClick}>
        {this.props.displayText}
        </button>
      )
    }
  }

  export default Button;