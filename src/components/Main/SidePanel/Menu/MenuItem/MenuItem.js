import React from 'react';
import Button from '@material-ui/core/Button';

const click = (id, props) => {
  switch (id) {
    case 1:
      console.log(id);
      break;
    case 2:
      console.log(id);
      break;
    case 3:
      window.location.href = 'https://github.com/n3op2/dnd-startwars';
      break;
    default:
      return 0;
  } 
}

const MenuItem = (props) => ( 
  <Button 
    onClick={() => click(props.item.id, props)}
    style={{ 
      width: '100%',
      borderColor: '#007070',
      color: '#007070',
      marginBottom: '5px'
    }}
    variant='outlined'
  >
    {props.item.name}
  </Button> 
);

export default MenuItem;
