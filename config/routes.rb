Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :events do
    resources :guests do #, [:new, :create]
      resources :answers
    end
  end

  resources :choices do
    collection do                       # collection => no restaurant id in URL
      post 'createthemeschoices'                         # RestaurantsController#top
    end
  end

  resources :polls

  resources :guests, only: [:destroy]
end
