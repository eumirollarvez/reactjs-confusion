import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  
  renderDish(dish) {
    if (dish != null)
      return (
        <div className="row">
          <div  className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={ dish.image } alt={ dish.name } />
              <CardBody>
                <CardTitle>{ dish.name }</CardTitle>
                <CardText>{ dish.description }</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
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

export default DishDetail;