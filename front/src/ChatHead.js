import React, { Component } from 'react';

class ChatHead extends Component {
  render() {
    return (
      <div style={{
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        margin:'2px',
        }}>
        {
          this.props.sender > 1 ? 
            <div style={{
              position: 'absolute',
              right: '5px',
              padding:'4px',
              borderRadius: '5px',
              backgroundColor: '#C6DCFF',
            }}>
              {this.props.text}
            </div>
            :
            <div style={{
              position: 'absolute',
              left: '5px',
              padding:'4px',
              borderRadius: '5px',
              backgroundColor: '#68A2FF',
            }}>
              {this.props.text}
            </div>
        }
        <br style={{clear:'both',}}/>
      </div>
    );
  }
}

export default ChatHead;
