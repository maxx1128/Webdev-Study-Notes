# Components

The properties and functionalities of React components

A React component requires the `React` and `React-DOM` dependencies, and then extends from the `React.Component` class.

* The `constructor(props)` function is needed for included properties and state values.
    - **Properties** are values passed in when the component is called, such as label text.
    - **State** are set internally in every component and change as the component is interacted with, such as if a menu is opened or not in the below example.
* Functions can also be defined inside the component and used in the render to trigger different interactions and effects. In the example below, the `toggleMenu()` function is defined and set as a click event.
* The `render()` function will return the jsx markup of the component. Javascript variables and function, and other JS code, can be written into it too.
    - The markup is only put for `return`. Other code can be written before it in the function.
* The file's end should export the component so others can use it.

{% highlight javascript %}
class Dropdown extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         open: false
      }
   }

   // Make sure component functions use arrow functions, needed to change state
   toggleMenu = () => {
      menu_state = this.state.open;
      this.setState({
        open: !menu_state
      });
   }

   render() {
      const menu = this.props.menu;
      const menu_class = `dropdown ${this.state.open ? 'dropdown--open' : ''}`;

      return (
         <div className="dropdown-wrapper">
            <span className="dropdown-title" onClick={() => this.toggleMenu()}>
               {this.props.label}
            </span>
            <ul className={menu_class}>
               {menu.map(function(item, index){
                  return <a key={index}
                            href={item.link}>
                           <li>
                              {item.label}
                           </li>
                         </a>
               })}
            </ul>
         </div>
      );
   }
}

export default Dropdown;
{% endhighlight %}

Once the component is defined and exported, it can be imported and rendered like so. This is also where other properties will be passed in.

{% highlight javascript %}
import Dropdown from './dropdown.js';

let menu_items = [
  {
    "label": "Item 1",
    "link": "javascript:void(0);"
  }, {
    "label": "Item 2",
    "link": "javascript:void(0);"
  }
];

ReactDOM.render(
  <Dropdown
    label="Dropdown"
    menu={menu_items}
  />,
  document.getElementById("root"));
{% endhighlight %}

## Passing Functions to Components

There'll likely be times where one component uses another, but the child component needs to trigger a change in the parent's state. This requires:

1. Creating a function that adjusts the state as needed in the parent
2. Passing this function down to the child
3. Linking the function to a click event in the child

For example, if we want to make a counter component with buttons that increase or decrease a count, we'd define these functions in the Counter and then pass them to the Button component.

{% highlight javascript %}
class Counter extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         number: 0
      }
   }

   increase_number = (i) => {
     let number = this.state.number
     this.setState({number: number++});
   }

   decrease_number = (i) => {
     let number = this.state.number
     this.setState({number: number--});
   }

   render() {
      return (
         <div>
            <p>{this.state.number}</p>

            <Button
              label={"Increase by 1"}
              on_click={() => this.increase_number(1)}
            />


            <Button
              label={"Decrease by 1"}
              on_click={() => this.decrease_number(1)}
            />
         </div>
      );
   }
}
{% endhighlight %}

Then in the Button, we reference this function by the property we passed it as for an `OnClick` event.

{% highlight javascript %}
class Button extends React.Component {
   render() {
      return (
         <button onClick={() => this.props.on_click()}>
           {this.props.label}
         </button>
      );
   }
}
{% endhighlight %}

This way we can pass a function and needed parameters to the child component, while keeping the child component structured to accept other kinds of functions from other components that may need it. If the function your passing uses no parameters, you can just write the above like this:

{% highlight javascript %}
on_click={this.decrease_number}
{% endhighlight %}
Don't include the parenthesis at the end of the function here, or else it will be called on page load. [Here's more info on passing functions to components.](https://reactjs.org/docs/faq-functions.html)

## Wrapping Children Components

Components can also be designed to yield to other HTML or components. For example, one component may create a wrapper around whatever else is passed in.

{% highlight javascript %}
<Wrapper>
    <h3>
      I'm in a burrito!
    </h3>

    <Burrito_Component />
</Wrapper>
{% endhighlight %}

The `Wrapper` component would need to do this so it renders what's inside:

{% highlight javascript %}
render() {
    <div class="wrapper-class">
        {this.props.children}
    </div>
}
{% endhighlight %}

## Lifecycle Hooks

[Lifecycle hooks](
https://reactjs.org/docs/react-component.html#the-component-lifecycle) are functions that a component will automatically look for and run when rendering or removing a component (referred to as mounting). For example, you can run code right before a component renders by using the `componentWillMount` function, or while it's being removed with the `componentWillUnmount` function.

A common use would be pulling in data from an API, and setting the state before the component renders.

{% highlight javascript %}
constructor(props) {
  super(props);
  this.state = {
     data: []
  }
}

// componentDidMount() also works
componentWillMount() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      return response.json();
    }).then(json_response => {
      this.setState({data: json_response})
    })

  // This is a shorter version that works the same
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json_response => this.setState({data: json_response}));
}
{% endhighlight %}

This way data can be pulled from an external source, use promises to wait for the response, and include all the needed data in the render cycle.
