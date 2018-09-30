import React, { PureComponent } from 'react';
import Space from './Space/Space';
import actions from '../../actions';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const Cosmos = styled.div`
  border: solid 1px black;
  position: relative;
  width: 100%;
  height: 500px;
  background-size: cover;
  background-image: url(${props => props.image});
`
const styles = {
  btn: { 
    color: 'cyan', 
    borderColor: 'cyan', 
    position: 'absolute', 
    top: '50%', 
    left: '45%' 
  }
}

class Main extends PureComponent {
  constructor(props) {
    super(props); 
    this.startGame = this.startGame.bind(this);
  }

  startGame = (val) => {
    this.props.gameState(val);  
  }

  render() {
    if(this.props.game) return (
      <Cosmos image='/img/stars.png'>
        <Space />
      </Cosmos>
    );
    return (
      <Cosmos 
        image='/img/stars.png'
      >
        <Button 
          onClick={() => this.startGame('true')} 
          style={styles.btn} variant='outlined'
        >Start</Button>
      </Cosmos>
    );
  }
};

const mapActionsToProps = {
  gameState: actions.updateGameState,
}

const mapStateToProps = (state) => ({
  game: state.game
});

export default connect(mapStateToProps, mapActionsToProps)(Main);
