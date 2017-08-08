const ROOT_URL = 'http://localhost:3000/api/v1'

class ProjectsAdapter {
  static function getProjects(option = '') {
    return fetch(`${ROOT_URL}/projects/${option}`)
  }

  static function createProject(project) {
    return fetch(`${ROOT_URL}/projects`, {
      method: 'POST',
      body: project
    })
  }

  static function updateProject(project) {
    return fetch(`${ROOT_URL}/projects/${project.id}`, {
      method: 'PATCH',
      body: project
    })
  }

  static function deleteProject(projectID) {
    return fetch(`${ROOT_URL}/projects/${projectID}`, {method: 'DELETE'})
  }
}

export default ProjectsAdapter
