import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../../../../actions';

import Planet from './Planet/Planet';

class GoodSide extends PureComponent {
  constructor(props) {
    super(props);
    //Move to redux?
    this.handleDrop = this.handleDrop.bind(this);
    this.startCounting = this.startCounting.bind(this);
  }

  /// Get rid of this. find a better way....
  startCounting = (length, obj, el) => {
    let seconds = 0;
    const { planets } = this.props;
    
    const countDown = setInterval(() => {
      seconds++;
      if(seconds >= length) {
        clearInterval(countDown);
        this.props.addElement(obj);
        this.props.removeKey(el);
        if(planets.filter(el => el.lucas === false))
          this.props.updateLukeFound(true);
      }
    }, 1000);
  }

  handleDrop = (el, obj) => {
    const updateEl = new Promise(resolve => {
      resolve(this.props.updateElement(el, obj));
    });
    updateEl.then(res => {
      this.startCounting(2, obj, el);
    });
  }

  componentDidMount() {
    //Place Lucas in a random planet
    this.props.addKey();
  }
  
  render() {
    const { planets } = this.props;
    
    if(this.props.lukeFound) {
      return <h1 style={{ lineHeight: '500px', color: 'white' }}>Lucas has been captured!</h1>
    } 
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
  removeKey: actions.removeKey,
  updateLukeFound: actions.updateLukeFound
}

const mapStateToProps = (state) => ({
  planets: state.planets,
  lukeFound: state.lukeFound
});

export default connect(
  mapStateToProps, 
  mapActionsToProps
)(GoodSide); 
