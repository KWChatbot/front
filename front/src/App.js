import React, { Component } from 'react';
import { Input } from 'antd';
import axios from 'axios';
import ChatHead from './ChatHead';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: '',
      idx: 0,
      chats:[],
    }
  }

  onInputVal = i => {
    this.setState({input: i.target.value})
  }

  onSendChat = (e) => {
    //Do Send to back
    this.setState({
      chats: [...this.state.chats, {sender:1, text:this.state.input}, {sender:2, text:'안녕!'}],
      input: '',
    })
  }
  render() {
    const chats = this.state.chats
    return (
      <div style={{
        width: '100%',
        height: '900px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        }}>
        <div style={{
          width: '100%',
          height: '80%',
          }}>
          {
            chats.map((c, idx) =>
              <ChatHead
                key = {idx}
                sender = {c.sender}
                text = {c.text}
              />  
            )
          }
        </div>        
        <div style={{
          width: '100%',
          height: '20%',
          }}>
          <Input 
            autosize='true' 
            addonAfter={<div onClick={this.onSendChat}> 전 송 </div>}
            value={this.state.input}  
            onChange={this.onInputVal}
            onPressEnter={this.onSendChat}
            style={{width: '90%'}}
            />
        </div>
      </div>
    );
  }
}

export default App;
