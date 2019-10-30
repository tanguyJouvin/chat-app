import React, {Component} from 'react';
import './Contact.css';

const Online = <div className="status"><div className="status-text"><div className="status-online">Online</div></div></div>
const Offline = <div className="status"><div className="status-text"><div className="status-offline">Offline</div></div></div>

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      online: false
    }
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
        <div>
          <div className="name">{this.props.name}</div>
          <div className="status">
            {this.props.online ? Online : Offline}
          </div>
        </div>
      </div>
    );
  }
}