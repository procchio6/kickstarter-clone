Rails.application.routes.draw do
  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      get '/projects/active', to: 'projects#active'
      get '/projects/inactive', to: 'projects#inactive'
      resources :projects
      resources :pledges
      resources :categories
    end
  end
end
