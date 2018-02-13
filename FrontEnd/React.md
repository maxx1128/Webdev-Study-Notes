
### A Basic React Component

A React component requires the `React` and `React-DOM` dependencies, and then extends from the `React.Component` class.

* The `constructor(props)` function is needed for included properties and state values.
    - **Properties** are values passed in when the component is called, such as label text.
    - **State** are set internally in every component and change as the component is interacted with, such as if a menu is opened or not in the below example.
* Functions can also be defined inside the component and used in the render to trigger different interactions and effects. In the example below, the `toggleMenu()` function is defined and set as a click event.
* The `render()` function will return the jsx markup of the component. Javascript variables and function, and other JS code, can be written into it too.
    - The markup is only put for `return`. Other code can be written before it in the function.
* The file's end should export the component so others can use it.

```
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
```

Once the component is defined and exported, it can be imported and rendered like so. This is also where other properties will be passed in.

```
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
```

### Passing Functions to Components

There'll likely be times where one component uses another, but the child component needs to trigger a change in the parent's state. This requires:

1. Creating a function that adjusts the state as needed in the parent
2. Passing this function down to the child
3. Linking the function to a click event in the child

For example, if we want to make a counter component with buttons that increase or decrease a count, we'd define these functions in the Counter and then pass them to the Button component.

```
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
```

Then in the Button, we reference this function by the property we passed it as for an `OnClick` event.

```
class Button extends React.Component {   
   render() {
      return (
         <button onClick={() => this.props.on_click()}>
           {this.props.label}
         </button>
      );
   }
}
```

This way we can pass a function and needed parameters to the child component, while keeping the child component structured to accept other kinds of functions from other components that may need it. If the function your passing uses no parameters, you can just write the above like this:

```
on_click={this.decrease_number}
```
Don't include the parenthesis at the end of the function here, or else it will be called on page load. [Here's more info on passing functions to components.](https://reactjs.org/docs/faq-functions.html)
