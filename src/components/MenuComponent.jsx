import React, { Component } from 'react';
import DishDetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(selectedDish) {
    this.setState({ selectedDish });
  }

  renderDish(dish) {
    if (dish == null) return ( <div></div> );

    return(
      <Card>
        <CardImg top src={ dish.image } alt={ dish.name } />
        <CardBody>
          <CardTitle>{ dish.name }</CardTitle>
          <CardText>{ dish.description }</CardText>
        </CardBody>
      </Card>
    );
  }

  renderMenu(dishes) {
    if (dishes == null) return ( <div></div> );

    const menu = dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={ dish.id }
            onClick={ () => this.onDishSelect(dish) }>
            <CardImg width="100%" src={ dish.image } alt={ dish.name } />
            <CardImgOverlay>
                <CardTitle>{ dish.name }</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <div className="row">
          { menu }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        { this.renderMenu(this.props.dishes) }
        <DishDetail dish={ this.state.selectedDish } />
      </div>
    );
  }
}

export default Menu;