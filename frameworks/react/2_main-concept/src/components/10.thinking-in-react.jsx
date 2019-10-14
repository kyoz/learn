import React, { Component } from 'react';

class ThinkingInReact extends Component {
  render() {
    return (
      <div>
        <Table data={DATA}/>
      </div>
    );
  }
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      showInStockOnly: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    console.log(name)

    this.setState({
      [name]: value
    });
  }

  render() {
    console.log('render');
    return (
      <div>
        <TableSearchBar handleInputChange={ this.handleInputChange } />
        <TableBody data={ DATA }
                   searchTerm={ this.state.searchTerm }
                   showInStockOnly={ this.state.showInStockOnly } />
      </div>
    );
  }
}

class TableSearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" name="searchTerm" placeholder="Search"
               onChange={ this.props.handleInputChange }/>

        <br />

        <label>
          <input type="checkbox" name="showInStockOnly"
                 onChange={ this.props.handleInputChange } />
          Just show in stock items
        </label>
      </div>
    );
  }
}

class TableBody extends Component {
  render() {
    const { searchTerm, showInStockOnly } = this.props;

    const data = this.props.data.filter(item => {
      const matchName = item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      const justShowInStock= !showInStockOnly ? true : (item.stocked === showInStockOnly);

      return matchName && justShowInStock;
    });

    return (
      <table>
        <thead>
          <tr>
            <td><b>NAME</b></td>
            <td><b>PRICE</b></td>
          </tr>
        </thead>
        <tbody>
          {data.map(item => 
            <tr key={ item.id }>
              <td>{ item.name }</td>
              <td>{ item.price }</td>
            </tr>
          )};
        </tbody>
      </table>
    );
  }
}

const DATA = [
  {id: 1, name: "Football", price: "$49.99", stocked: true},
  {id: 2, name: "Baseball", price: "$9.99", stocked: true},
  {id: 3, name: "Basketball", price: "$29.99", stocked: false},
  {id: 4, name: "iPod Touch", price: "$99.99", stocked: true},
  {id: 5, name: "iPhone 5", price: "$399.99", stocked: false},
  {id: 6, name: "Nexus 7", price: "$199.99", stocked: true}
];

export default ThinkingInReact;
