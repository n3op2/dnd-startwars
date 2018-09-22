import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../../../../actions';

import Planet from './Planet/Planet';

class GoodSide extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop = (el, obj) => {
    this.props.updateElement(el, obj);
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
