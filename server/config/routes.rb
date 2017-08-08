Rails.application.routes.draw do
  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      get '/projects/active', to: 'projects#active'
      get '/projects/inactive', to: 'projects#inactive'
      get '/projects/almost_funded', to: 'projects#allmost_funded'
      resources :projects
      resources :pledges
      get '/categories/:id/projects', to: 'categories#projects'
      resources :categories
    end
  end
end
