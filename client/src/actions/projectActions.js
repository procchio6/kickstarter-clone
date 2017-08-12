import ProjectAdapter from '../adapters/projectsAdapter'
import history from '../history'

export function createProject(formData) {
  return function (dispatch) {
    const fund_by_date = formData.fund_by_date.format('YYYY-MM-DD')
    const postBody = {...formData, fund_by_date}

    dispatch({type:'CREATING_PROJECT'})

    ProjectAdapter.createProject(postBody)
    .then(project => {
      if (project.errors) {
        dispatch({type: 'CREATE_PROJECT_FAILED', payload: project.errors})
      } else {
        dispatch({type: 'PROJECT_CREATED', payload: project})
        history.push(`/projects/${project.id}`)
      }
    })
  }
}

export function getProject(projectId) {
  return function (dispatch) {
    dispatch({type: 'GETTING_PROJECT', payload: projectId})
    ProjectAdapter.getProject(projectId)
    .then(project => {
      if (project.error) {
        dispatch({type: 'GET_PROJECT_FAILED', payload: project.error})
        history.push('/')
      } else {
        dispatch({type: 'LOAD_PROJECT', payload: project})
      }
    })
  }
}

export function clearErrors() {
  return {type: 'CLEAR_PROJECT_ERRORS'}
}
