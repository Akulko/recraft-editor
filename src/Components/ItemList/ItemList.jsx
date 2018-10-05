import React, { Component } from 'react';
import './ItemList';
import Cell from '../../common/Cell.jsx';
import items from '../../assets/items.js';

class ItemList extends Component {
  render() {
    return (
      <div className="item-wrapper">
        {items.map(i => (
          <Cell key={`${i}item`}>
            <img src={`/img/items/${i}.PNG`} alt="" />
          </Cell>
        ))}
      </div>
    );
  }
}

export default ItemList;
