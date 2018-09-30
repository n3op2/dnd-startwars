import React from 'react';
import Button from '@material-ui/core/Button';

const MenuItem = (props) => 
  <Button 
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

export default MenuItem
