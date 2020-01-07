import allUsers from './allUsers'
import loggedInUser from './loggedInUser'
import { combineReducers } from 'redux'

const allReducer = combineReducers({ allUsers, loggedInUser })

export default allReducer