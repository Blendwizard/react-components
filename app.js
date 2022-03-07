var App = () => (
  <div>
    Grocery List
    <GroceryList item={['apples', 'dots pretzels', 'ice cream']} />
  </div>
);




// GroceryListItem class component
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // 'State' is just an object literal
    this.state = {
      done: false,
      isHovering: false
    }
  }


  // Setup click function.
  // When a list item is clicked we will toggle the 'done'
  // boolean and our component's render method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }


  // Setup a hover function
  // When a list item is hovered over, we will toggle
  // the 'isHovering' boolean and run the render method again
  onListItemHover() {
    this.setState({
      isHovering: !this.state.isHovering
    })
  }

  render() {
   // Making the style conditional on our `state` lets us
   // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      "font-weight": this.state.isHovering ? "bold" : "normal"
    };

    return (
      <li style={style} onMouseLeave={this.onListItemHover.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    )
  }

}




// Dynamic component function
var GroceryList = (props) =>  {

  return (
    <ul>
      {props.item.map(item =>
        <GroceryListItem item={item} />
        )}
    </ul>
  );
}


ReactDOM.render(<App />, document.getElementById("app"));


//onMouseEnter
//onMouseLeave