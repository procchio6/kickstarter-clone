export default function projectsReducer(state={currentProject: {}, list:[]}, action) {
  switch (action.type) {
    case "LOAD_PROJECT":
      return {...state, currentProject: action.payload}
    case "LOAD_PROJECTS":
      return {...state, list: action.payload}
    default:
      return state
  }
}
