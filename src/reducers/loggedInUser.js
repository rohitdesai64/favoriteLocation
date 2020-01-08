
const loggedInUser = (state = [], action) => {
  console.log(state, " --- logged In ------- ", action)
  // switch(action.type) {
  //   case 'LOGGED_IN':
  //     return action.payload
  //   default:
  //     return state
  // }
  return state
}

export default loggedInUser