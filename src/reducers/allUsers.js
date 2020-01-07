let userData = require("../data.json");

const allUsers = (state = [], action) => {
  // console.log("Reducer ------- ", action)
  switch(action.type) {
    case 'LOGGED_IN':
      return userData
    default:
      return userData
  }
}

export default allUsers