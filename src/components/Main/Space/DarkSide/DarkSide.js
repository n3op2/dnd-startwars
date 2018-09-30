import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../../../../actions';
import Interceptor from './Interceptor/Interceptor';
import DeathStar from './DeathStar/DeathStar';

class DarkSide extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop = (el) => {
    this.props.removeElement(el);
  }

  render() {
    const { interceptors } = this.props;
    return (
      <Fragment>
        <DeathStar />
        {interceptors.map((interceptor, i) =>
          <Interceptor 
            key={i} 
            interceptor={interceptor} 
            handleDrop={(el) => this.handleDrop(el)}
          />
        )}
      </Fragment>
    )
  }
}

const mapActionsToProps = {
  removeElement: actions.removeElement
}

const mapStateToProps = (state) => ({
  interceptors: state.interceptors 
});

export default connect(
  mapStateToProps, 
  mapActionsToProps
)(DarkSide);
