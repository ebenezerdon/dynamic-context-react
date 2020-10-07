import React from 'react'
import { UserContext } from './context'

class GreetButton extends React.Component {
  render() {
    let props = this.props
    let user = this.context
    return (
      <button {...props} onClick={() => alert(`Hello ${user.firstName}`)}>
        Greet {user.firstName}
      </button>
    )
  }
}

GreetButton.contextType = UserContext

export default GreetButton
