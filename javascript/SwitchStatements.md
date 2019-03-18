# Switch Statements

Large amounts of conditionals can often be awkward for `if` statements. The `switch` statement will often work better

{% highlight javascript %}
switch (variable_here) {
    case (10):
        console.log("It's ten!");
        break;
    case (5):
        console.log("It's five!");
    case (2):
        console.log("It's two!");
    default:
        console.log("What is this number...?");
        break;
}
{% endhighlight %}

Note that you don't need to include `break` in every case, which executes the code but then keeps going.
