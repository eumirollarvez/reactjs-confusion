import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

  function LeaderDetail({ leader }) {
    if (leader == null) return ( <div></div> );

    return (
      <Card>
        <CardImg top src={ leader.image } alt={ leader.name } />
        <CardBody>
          <CardTitle>{ leader.name }</CardTitle>
          <CardText>{ leader.designation }</CardText>
          <CardText>{ leader.description }</CardText>
        </CardBody>
      </Card>
    );
  }

  const RenderLeader = (props) => {
      return (
        <div className="container">
          <div className="row">
            <LeaderDetail leader={ props.leader } />
          </div>
        </div>
      );
    }

export default RenderLeader;