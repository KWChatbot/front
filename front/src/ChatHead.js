import React, { Component } from 'react';
import './App.css'

const botStyle={
  float: 'right',
  backgroundColor: '#C6DCFF',
}

const userStyle={
  float: 'left',
  backgroundColor: '#68A2FF',
}

class ChatHead extends Component {
  render() {
    return (
      <div class='chatUpper'> 
            <div 
            class='chat' 
            style={this.props.sender > 1 ? botStyle: userStyle}>
              {this.props.text}
            </div>
      </div>
    );
  }
}

export default ChatHead;
