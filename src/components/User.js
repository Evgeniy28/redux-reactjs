import React, {PropTypes, Component} from 'react'

class User extends Component {
  render() {
    const { name } = this.props

    return (
      <div className='ib user'>
        <p>Hello, {name}!</p>
      </div>
    );
  }
}

User.PropTypes = {
  name: PropTypes.string.isRequired
}

export default User;
