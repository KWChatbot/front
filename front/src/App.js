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

  messagesEnd = React.createRef()

  onInputVal = i => {
    this.setState({input: i.target.value})
  }

  onSendChat = async (e) => {
    //Do Send to back
    const umsg = this.state.input
    this.setState({
      chats: [...this.state.chats, {sender:1, text:umsg}],
      input: '',
    })
    await axios.post('http://127.0.0.1:8000/chat/', {
      text: umsg,
    })
    .then(r =>{
      this.setState({
        chats:[...this.state.chats, {sender:2, text:r.data.text}]
      })
    })
    .catch(e => {
      console.log(e)
    })
    this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
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
          margin:'8px',
          padding: '4px',
          width: '95%',
          height: '80%',
          overflow: 'auto',
          overflowX: 'hidden',
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
          <div ref={this.messagesEnd} />
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
