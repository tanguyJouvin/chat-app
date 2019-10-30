import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      online: props.online
    };
  }

  invertStatus = event => {
    const offline = !this.state.online;
    this.setState({
      online : offline
    })
  }
  
  render() {
    // console.log(this.props);
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <h3 className="name">{this.props.name}</h3>
          {/* logique d'inversion au click'  */}
          <div className='status' onClick = { this.invertStatus }>
            <span className={this.state.online ? "status-online" : "status-offline"} >
            </span>
            <span className='status-text' >{this.state.online ? 'Online' : 'Offline'}</span>
          </div>

        </div>
      </div>
    );
  }
}