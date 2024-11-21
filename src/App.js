import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import FilteredList from './FilteredList';
import HelloWorld from './HelloWorld';


const produce = [
  {name: "Apple", type: "Fruit"},
  {name: "Pineapple", type: "Fruit"},
  {name: "Banana", type: "Fruit"},
  {name: "Pear", type: "Fruit"},
  {name: "Strawberry", type: "Fruit"},
  {name: "Orange", type: "Fruit"},
  {name: "Lettuce", type: "Vegetable"},
  {name: "Cucumber", type: "Vegetable"},
  {name: "Eggplant", type: "Vegetable"},
  {name: "Squash", type: "Vegetable"},
  {name: "Bell pepper", type: "Vegetable"},
  {name: "Onion", type: "Vegetable"},
]
function App() {
  return (
    <div className="App">
      <HelloWorld name={"Saketh Chandra"} />
      <Counter />
      <FilteredList items={produce} />
    </div>
  );
}

export default App;
