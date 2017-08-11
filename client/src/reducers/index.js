import { combineReducers } from 'redux'

import authReducer from './authReducer'
import categoriesReducer from './categoriesReducer'
import newProjectFormReducer from './newProjectFormReducer.js'
import projectsReducer from './projectsReducer'
import signupFormReducer from './signupFormReducer'

export default combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  signupForm: signupFormReducer,
  newProjectForm: newProjectFormReducer,
  categories: categoriesReducer
})
