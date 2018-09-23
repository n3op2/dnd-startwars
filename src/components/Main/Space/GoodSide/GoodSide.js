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

  setTimer = (length, obj) => {
    let t = 0;
    let countDown = setInterval(() => {
      t++;
      if(t >= length) {
        clearInterval(countDown);
        //Call action to return interceptor; 
        console.log('Do something when it is over.');
        console.log('arg2: ', obj);
      }
    }, 1000);
  }

  handleDrop = (el, obj) => {
    this.props.updateElement(el, obj);
    this.setTimer(4, obj);
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
  updateElement: actions.updateElement
}

const mapStateToProps = (state) => ({
  planets: state.planets
});

export default connect(
  mapStateToProps, 
  mapActionsToProps
)(GoodSide); 
