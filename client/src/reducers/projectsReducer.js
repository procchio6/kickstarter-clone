export default function projectsReducer(state={currentProject: {}}, action) {
  switch (action.type) {
    case "LOAD_PROJECT":
      return {...state, currentProject: action.payload}
    default:
      return state
  }
}
