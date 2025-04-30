import React from 'react'
import './Message.css'


class Message extends React.Component {

	constructor(props) {
			super(props);
	}


  render() {

    return(
				<div className='message-wrapper'>
					{(this.props.error)? <p className='message message--red'><sup>*</sup>{this.props.error}</p> : (this.props.text) && <p className='message message--green'><sup>*</sup>{this.props.text}</p>}
				</div>
		) 
  }
}

export default Message
