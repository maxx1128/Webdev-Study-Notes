---
group: rubyonrails
layout: post

incompete: true
title: Router
descr: How the rails router connects URLs to different controllers
---

`root controller#action`

`get '/string/string_2', to: 'controller#action'`

`get '/string_1/:param_1/:param_2', to: 'controller#action'`
`params[:param_1]` in the controller

`resources :controller`
