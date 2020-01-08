export const ALL_USERS = (state) => {
  console.log("Action ALL_USERS -----")
  return {
    type: 'ALL_USERS',
    paylod: state
  } 
}

export const LOGGED_IN = (state) => {
  console.log("Action LOGGED_IN -----")
  return {
    type: 'LOGGED_IN',
    paylod: state
  } 
}

export default ALL_USERS