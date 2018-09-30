import React, { PureComponent } from 'react';
import Space from './Space/Space';
import actions from '../../actions';
import styled from 'styled-components';
import { connect } from 'react-redux';


const Cosmos = styled.div`
  border: solid 1px black;
  position: relative;
  width: 100%;
  height: 500px;
  background-size: cover;
  background-image: url(${props => props.image});
`
class Main extends PureComponent {
  constructor(props) {
    super(props); 
    this.startGame = this.startGame.bind(this);
  }

  startGame = () => {
    this.props.gameState(true);  
  }

  render() {
    console.log(this.props);
    if(this.props.game) return <Space />
    return (
      <Cosmos image='/img/stars.png'>
        <button onClick={this.startGame}>Start Game</button>
      </Cosmos>
    );
  }
};

const mapActionsToProps = {
  gameState: actions.updateBoolean
}

const mapStateToProps = (state) => ({
  game: state.game
});

export default connect(mapStateToProps, mapActionsToProps)(Main);
