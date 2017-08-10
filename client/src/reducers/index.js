import { combineReducers } from 'redux'

import authReducer from './authReducer'
import projectsReducer from './projectsReducer'
import signupFormReducer from './signupFormReducer'

export default combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  signupForm: signupFormReducer
})
