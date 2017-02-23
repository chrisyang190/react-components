var App = () => (
  <div id='app'>
    <h2>Grocery List</h2>
    <GroceryList groceryItems = {['Apples', 'Oranges', 'Bananas', 'Pineapples']} />
  </div>
);


var GroceryList = (props) => (
 <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bold: false
    }
  }

  onGroceryItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {

    var style = {
      fontWeight: this.state.bold ? 'bold' : 'none'
    };

     return (
      <li style={style} onMouseOver={this.onGroceryItemHover.bind(this)}>{this.props.groceryItem}</li>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('app'));
