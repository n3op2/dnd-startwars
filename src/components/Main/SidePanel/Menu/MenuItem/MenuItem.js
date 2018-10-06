import React from 'react';
import Button from '@material-ui/core/Button';
import actions from '../../../../../actions';

import { connect } from 'react-redux';

/// ?
const click = (id, props) => {
  switch (id) {
    case 1:
      console.log(id);
      break;
    case 2:
      props.reset();
      props.addKey();
      props.updateLukeFound(false);
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

const mapStateToProps = (state) => ({
  game: state.game
});

const mapActionsToProps = {
  updateGame: actions.updateGameState, 
  reset: actions.reset,
  updateLukeFound: actions.updateLukeFound,
  addKey: actions.addKey
}

export default connect(mapStateToProps, mapActionsToProps)(MenuItem);
