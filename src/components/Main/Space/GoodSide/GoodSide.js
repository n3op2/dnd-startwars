import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../../../../actions';
import Planet from './Planet/Planet';
import styled from 'styled-components';

const DialogText = styled.div`
  font-size: 16px;
  color: #a9a9a9;
`

class GoodSide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleDrop = this.handleDrop.bind(this);
    this.startCounting = this.startCounting.bind(this);
  }

  /// Get rid of this. find a better way....
  startCounting = (length, planet, interceptor) => {
    let seconds = 0;
    const { planets } = this.props;
    const countDown = setInterval(() => {
      seconds++;
      this.props.updateKeyVal(planet);
      if(seconds >= length) {
        clearInterval(countDown);
        this.props.addElement(interceptor);
        this.props.removeKey(planet);
        if(planets.some(el => el.lucas === false)){
          this.props.updateLukeFound(true);
        }
      }
    }, 1000);
  }

  handleDrop = (planet, interceptor) => {
    const updateEl = new Promise(resolve => {
      resolve(this.props.updateElement(planet, interceptor));
    });
    updateEl.then(res => {
      this.startCounting(planet.total, planet, interceptor);
    });
  }

  componentDidMount() {
    //Place Lucas in a random planet
    this.props.addKey();
  }
  
  render() {
    const { planets, lukeFound } = this.props;
    
    if(lukeFound) {
      //A Dialog box or somt?
      return (
        <DialogText>
          {"Congratulations, you have successfully captured Luke. Long live Death Star."}
        </DialogText>
      )
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
    );
  }
}


const mapActionsToProps = {
  updateElement: actions.updateElement,
  addElement: actions.addElement,
  addKey: actions.addKey,
  removeKey: actions.removeKey,
  updateLukeFound: actions.updateLukeFound,
  updateKeyVal: actions.updateKeyVal
}

const mapStateToProps = (state) => ({
  planets: state.planets,
  lukeFound: state.lukeFound
});

export default connect(
  mapStateToProps, 
  mapActionsToProps
)(GoodSide); 
