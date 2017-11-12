import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import customers from '../../customers.json';
import '../../styles.scss';

const CustomerRow = ({customer}) => (
  <tr>
    <td>{customer.title} {customer.first_name} {customer.last_name}</td>
    <td>{customer.profession}</td>
    <td>{customer.has_children ? "Y" : "N"}</td>
    <td>
      {customer.dominant_traits[0].level}
      {customer.dominant_traits[0].primary_trait},
      {customer.dominant_traits[1].level}
      {customer.dominant_traits[1].secondary_trait}
    </td>
  </tr>
);

let items = customers.slice(0, 10).map(c => <CustomerRow key={c.id} customer={c}/>);

const generateCustomers = (start, end) => {
  let tmp = customers.slice(start, end).map(c => <CustomerRow key={c.id} customer={c}/>);
  return tmp;
};

class Table extends Component {

  constructor() {
    super();
    this.state = { items: items };
    this.generateItems = this.generateItems.bind(this);
  }

  generateItems() {
    let count = this.state.items.length;
    let customerArray = generateCustomers(count, count + 5);
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(customerArray)
      });
    }, 500);
  }

  render() {
    return (
      <InfiniteScroll
        next={this.generateItems}
        hasMore={this.state.items.length <= customers.length}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Profession</th>
              <th>Children</th>
              <th>Traits</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items}
          </tbody>
        </table>
        </InfiniteScroll>
      );
  }
}

export default Table;
