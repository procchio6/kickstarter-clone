Rails.application.routes.draw do
  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      post '/login', to: 'users#login'
      resources :users, except: :destroy

      get '/projects/active', to: 'projects#active'
      get '/projects/inactive', to: 'projects#inactive'
      get '/projects/almost_funded', to: 'projects#almost_funded'
      get '/projects/almost_over', to: 'projects#almost_over'
      resources :projects

      resources :pledges

      get '/categories/:id/projects', to: 'categories#projects'
      resources :categories
    end
  end
end
