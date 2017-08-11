import headers from './headers'

const ROOT_URL = 'http://localhost:3000/api/v1'

class ProjectsAdapter {
  static getProjects(option = '') {
    return fetch(`${ROOT_URL}/projects/${option}`, {headers})
  }

  static createProject(project) {
    return fetch(`${ROOT_URL}/projects`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(project)
    }).then(resp => resp.json())
  }

  static updateProject(project) {
    return fetch(`${ROOT_URL}/projects/${project.id}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify(project)
    })
  }

  static deleteProject(projectID) {
    return fetch(`${ROOT_URL}/projects/${projectID}`, {method: 'DELETE', headers: headers()})
  }
}

export default ProjectsAdapter
