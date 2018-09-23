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
  removeKey: actions.removeKey
}

const mapStateToProps = (state) => ({
  planets: state.planets
});

export default connect(
  mapStateToProps, 
  mapActionsToProps
)(GoodSide); 
