import React from 'react'

const users = {
  firstUser: {
    firstName: 'Jane',
    lastName: 'Doe',
  },
  secondUser: {
    firstName: 'John',
    lastName: 'Doe',
  },
}

const UserContext = React.createContext(users.firstUser)

export { users, UserContext }
