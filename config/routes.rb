Rails.application.routes.draw do
  root to: "home#index"
  get "/resume", to: "home#show"
end
