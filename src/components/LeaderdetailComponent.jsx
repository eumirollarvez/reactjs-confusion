import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

  function RenderLeader({ leader }) {
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

  const LeaderDetail = (props) => {
      return (
        <div className="container">
          <div className="row">
            <RenderLeader leader={ props.leader } />
          </div>
        </div>
      );
    }

export default LeaderDetails;