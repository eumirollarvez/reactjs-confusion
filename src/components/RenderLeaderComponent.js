import React from 'react';
import { Media } from 'reactstrap';

  function LeaderDetail({ leader }) {
    if (leader == null) return ( <div></div> );

    return (
      <div className="row" key={leader.id}>
        <Media tag="li">
            <Media left middle>
                <Media object src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    </div>
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