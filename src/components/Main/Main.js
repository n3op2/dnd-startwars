import React, { PureComponent } from 'react';
import Space from './Space/Space';
import actions from '../../actions';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Cosmos = styled.div`
  border: solid 1px black;
  position: relative;
  width: 100%;
  height: 700px;
  background-size: cover;
  background-image: url(${props => props.image});
`
const DialogText = styled.div`
  font-size: 16px;
  color: #a9a9a9;
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
    this.state = {
      showRules: false
    }
    this.startGame = this.startGame.bind(this);
    this.handleDialog = this.handleDialog.bind(this);
    this.handleRules = this.handleRules.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  handleRules = () => {
    this.handleDialog();
  }

  handleDialogClose = () => {
    this.setState({ showRules: false }); 
  }

  handleDialog = () => {
    this.setState({ showRules: true }); 
  }

  startGame = (val) => {
    this.props.gameState(val);  
  }

  render() {
    if(this.props.game) return (
      <Cosmos image='/img/stars.jpeg'>
        <Space />
      </Cosmos>
    );
    if(!this.props.game)
    return (
      <Cosmos 
        image='/img/stars.jpeg'
      >
        <Button 
          onClick={() => this.handleRules()} 
          style={styles.btn} variant='outlined'
        >Start</Button>
        <Dialog
          open={this.state.showRules}
          onClose={this.handleDialogClose}
          aria-labelledby="alert-title"
          aria-describedby="alert-description"
        >
          <DialogTitle id="alert-title">{"The Game Rules:"}</DialogTitle>
          <DialogContent>
            <DialogText>
              {"You are Darth Vader. Your objective of this very important mission is to stop rebels from destroying your death star. The only way to achieve this is to find Mr Luke before it's to late. Luke will be hiding in one of the planets. Good Luck, Have Fun!"}<br/><br/>{"Use mouse to drag your interceptors and drop it on the planet."}
            </DialogText>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={() => this.startGame('true')} 
              variant='outlined'
            >Yes, sir!</Button>
          </DialogActions>
        </Dialog>
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
