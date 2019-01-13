import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {
  
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={ dish.image } alt={ dish.name } />
          <CardBody>
            <CardTitle>{ dish.name }</CardTitle>
            <CardText>{ dish.description }</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }

  render() {
    return (
      this.renderDish(this.props.dish)
    );
  }
}

export default DishdetailComponent;