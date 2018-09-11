---
group: rubyonrails
layout: post

incomplete: true
title: Controllers
descr: What Rails controllers are and how to use them right
---

Keep as simple and stupid as possible with the goal of pulling any needed data and the correct template.

Define variables accessible to the view with the `@` sign (specific name for them?!)

{% highlight ruby %}
def new
  @category = Category.all
  @categories_desc_dates = Category.all.order({ created_at: :desc })
end
{% endhighlight %}

{% highlight ruby %}
render '/categories/month'
{% endhighlight %}
