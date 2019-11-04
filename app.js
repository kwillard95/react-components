// TODO

var GroceryList = () => (
    <div>
        <h2>My Grocery List</h2>
      <ul>
       <li>Apples</li> 
       <li>Bananas</li>
      </ul>
    </div>
  
)

ReactDOM.render(<GroceryList />, document.getElementById('app'));

var GroceryList = () => (
    <div>
        <h2>My Grocery List</h2>
      <ul>
        <Apples />
        <Bananas />
      </ul>
    </div>
  
)


var Apples = () => (
    <li>Apples</li>
)

var Bananas = () => (
    <li>Bananas</li>
)

ReactDOM.render(<GroceryList />, document.getElementById('app'));


var GroceryList = () => (
    <div>
    <h2>My Grocery List</h2>
    <GroceryListItem items={['Apples', 'Bananas']} />
    </div>
);
var GroceryListItem = (props) => (
    <ul>
        <li> {props.items[0]} </li>
        <li> {props.items[1]} </li>
    </ul>
)

ReactDOM.render(<GroceryList />, document.getElementById('app'));


class GroceryListItem extends React.Component //prototype chain 
{
    //function that allows changes to this obj itself
    constructor(props) {
        super(props); //.call(this)
    }
    //methods that grocery list have
    //render is a key word for react to identify
    render () {
        return (
            <li>{this.props.item}</li>
        );
    }
}

var items = ['Apples', 'Bananas', 'Celery'];

var GroceryList = (props) => (
    <div>
      <h2>My Grocery List</h2>
      <ul>
       {props.items.map((item, index) => 
        <GroceryListItem item={item} key={index} />
        )}
      </ul>
    </div>
)

//GrocerList({items: itemsArray})

ReactDOM.render(<GroceryList items={items}/>, document.getElementById('app'))

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false
        };
    }

    onGroceryListItemClick() {
        this.setState({
            done: !this.state.done
        });
    }
    render () {
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };

        return (
            <li style={style} onClick={this.onGroceryListItemClick.bind(this)}>{this.props.item}</li>
        );
    }
}

var GroceryList = (props) => (
    <div>
      <h2>My Grocery List</h2>
      <ul>
       {props.items.map((item, index) => 
        <GroceryListItem item={item} key={index} />
        )}
      </ul>
    </div>
)



var items = ['Apples', 'Bananas', 'Celery'];
ReactDOM.render(<GroceryList items={items}/>, document.getElementById('app'))