Rails.application.routes.draw do
  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resources :projects
      resources :pledges
      resources :categories
    end
  end
end
