import React from 'react';
import './Card.css';

const Card = (props) => {
  // classes will act as a prop to add the 'card' class + anyother added to this component when used
  // in another one
  const classes = `card ${props.className}`;
  return (
    // props.children = special prop that will contain the nested JSX of any component it wraps around
    <div className={classes}>{props.children}</div>
  );
};

export default Card;
