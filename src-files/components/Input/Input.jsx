import React from 'react'
import './Input.css'

class Input extends React.Component {

	constructor(props) {
			super(props);
		}

  render() {
	 return(
			
				<>
					<input
						className="form__input"
						type={this.props.type}
						name={this.props.name}
						value={this.props.value}
						placeholder={this.props.placeholder}
						autoComplete={this.props.autoComplete}
						onChange={this.props.onChange} />
				</>
		) 
  }
}

export default Input