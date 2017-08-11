import ProjectAdapter from '../adapters/projectsAdapter'

export function createProject(formData) {
  return function (dispatch) {
    const fund_by_date = formData.fund_by_date.format('YYYY-MM-DD')
    const postBody = {...formData, fund_by_date}

    console.log('project post body', postBody)
    dispatch({type:'CREATING_PROJECT'})

    ProjectAdapter.createProject(postBody)
    .then(resp => {
      if (resp.errors) {
        dispatch({type: 'CREATE_PROJECT_FAILED', payload: resp.errors})
      } else {
        dispatch({type: 'PROJECT_CREATED', payload:resp})
      }
    })
  }

}
