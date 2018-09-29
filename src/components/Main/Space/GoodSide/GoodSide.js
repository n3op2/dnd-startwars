import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../../../../actions';

import Planet from './Planet/Planet';

class GoodSide extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  //Something I should consider moving to utils.js?
  setTimer = (length, obj, el) => {
    let seconds = 0;
    let countDown = setInterval(() => {
      seconds++;
      if(seconds >= length) {
        clearInterval(countDown);
        this.props.addElement(obj);
        this.props.removeKey(el);
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
  
  componentDidUpdate() {
    //remove this
    const { planets } = this.props;
    const tmpArr = [];
    planets.map(item => {
      item.lucas ? tmpArr.push(item) : null; 
    });
    //Need to figure out a better approch, 
    //calls itself to many times due to props being updated.
    if(tmpArr.length === 0) console.log('Game Over, Lucas has been captured. HF GL.');
  }

  render() {
    const { planets } = this.props;
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
