import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';


class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  
  onFilter = (type) => {
    this.setState({ type });
  }


  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = this.state.type === "All" || item.type === this.state.type;
    return matchesSearch && matchesType;
  }

  render(){
    return (
        <div className = "filter-list">
         
            <Dropdown>
                <Dropdown.Item onClick={() => this.onFilter("All")}>All</Dropdown.Item>
                <Dropdown.Item onClick={() => this.onFilter("Fruit")}>Fruits</Dropdown.Item>
                <Dropdown.Item onClick={() => this.onFilter("Vegetable")}>Vegetables</Dropdown.Item>
            </Dropdown>
          
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
