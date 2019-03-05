Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :events do
    resources :guests do #, [:new, :create]
      resources :answers do
        collection do
          get 'recap'
        end
      end
    end
  end

  resources :choices, except: [:create]

  resources :polls do
    resources :choices, only: [:create] do
      collection do                       # collection => no restaurant id in URL
        post 'createthemeschoices'                                 # RestaurantsController#top
      end
      collection do
        post 'createdestinationchoices'
      end
      collection do
        get 'newdestinationchoices'
      end
    end
  end

  resources :guests, only: [:destroy]
end
