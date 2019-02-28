Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :events do
    resources :guests #, [:new, :create]
  end
  resources :answers
  resources :guests, only: [:destroy]
end
