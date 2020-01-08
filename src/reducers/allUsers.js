let userData = require("../data.json");

// const allUsers = (state = [], action) => {
//   console.log("Reducer ------- ", action)
//   switch(action.type) {
//     case 'ALL_USERS':
//       return userData
//     default:
//       return state
//   }
// }

const allUsers = (state = [], action) => {
    console.log("Reducer ------- ", action)
        return userData
    }

export default allUsers