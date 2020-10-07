import React from 'react'
import { users, UserContext } from './context'
import GreetButton from './GreetButton'

// An intermediate component that uses the GreetButton
function Toolbar(props) {
  return (
    <>
      <button onClick={props.greetAndToggleUser}> Greet {props.user.firstName} </button>
    </>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: users.secondUser,
    }

    this.greetAndToggleUser = () => {
      alert(`Hello ${this.state.user.firstName}`)
      this.setState(state => ({
        user:
          state.user === users.firstUser
            ? users.secondUser
            : users.firstUser,
      }))
    }
  }

  render() {
    // The GreetButton button inside the UserProvider
    // uses the user from state while the one outside uses
    // the default firstUser
    return (
      <>
        <UserContext.Provider value={this.state.user}>
          <Toolbar greetAndToggleUser={this.greetAndToggleUser} user={this.state.user}/>
        </UserContext.Provider>
        <GreetButton />
      </>
    )
  }
}

export default App
