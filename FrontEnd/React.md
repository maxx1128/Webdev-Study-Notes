
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
   
   toggleMenu() {
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