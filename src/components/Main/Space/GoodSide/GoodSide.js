import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../../../../actions';

import Planet from './Planet/Planet';

class GoodSide extends PureComponent {
  constructor(props) {
    super(props);
    // Move to redux?
    this.state = {
      gameOn: [],
    }
    this.handleDrop = this.handleDrop.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  //Create a class? Closure? Anything?
  setTimer = (length, obj, el) => {
    let seconds = 0;
    const { planets } = this.props;
    const countDown = setInterval(() => {
      seconds++;
      if(seconds >= length) {
        clearInterval(countDown);
        this.props.addElement(obj);
        this.props.removeKey(el);
        this.setState({
          gameOn: planets.filter(el => el.lucas === false) 
        });
      }
    }, 1000);
  }

  handleDrop = (el, obj) => {
    this.props.updateElement(el, obj);
    //Timer calls an action;
    this.setTimer(4, obj, el);
  }

  componentDidMount() {
    //Place Lucas in a random planet
    this.props.addKey();
  }
  
  render() {
    const { planets } = this.props;

    if(this.state.gameOn.length > 0) {
      return (
       <Fragment>
          <h1 style={{ position: 'absolute' }}>Lucas has been captured!</h1>
          {planets.map((planet, i) => 
            <Planet
              handleDrop={(el, obj) => this.handleDrop(el, obj)}
              key={i}
              planet={planet}
            />
          )}
        </Fragment>
      );
    } else {
      return (
       <Fragment>
          {planets.map((planet, i) => 
            <Planet
              handleDrop={(el, obj) => this.handleDrop(el, obj)}
              key={i}
              planet={planet}
            />
          )}
        </Fragment>
      )
    }
  }
}

const mapActionsToProps = {
  updateElement: actions.updateElement,
  addElement: actions.addElement,
  addKey: actions.addKey,
  removeKey: actions.removeKey
}

const mapStateToProps = (state) => ({
  planets: state.planets
});

export default connect(
  mapStateToProps, 
  mapActionsToProps
)(GoodSide); 
