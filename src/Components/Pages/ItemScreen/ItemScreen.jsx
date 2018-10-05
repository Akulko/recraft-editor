import React, { Component } from 'react';
import './ItemScreen.scss';
import Plate from '../../../common/Plate.jsx';
import ItemList from '../../ItemList';

class ItemScreen extends Component {
  render() {
    return (
      <Plate>
        <ItemList />
      </Plate>
    );
  }
}

export default ItemScreen;
