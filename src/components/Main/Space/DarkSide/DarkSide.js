import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../../../../actions';
import Interceptor from './Interceptor/Interceptor';

import styled from 'styled-components';

class DarkSide extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop = (interceptor) => {
    console.log('handleDrop(): ', interceptor);
    this.props.removeElement(interceptor);
  }

  render() {
    const { interceptors } = this.props;
    return (
      <Fragment>
      {interceptors.map((interceptor, i) =>
        <Interceptor 
          key={i} 
          interceptor={interceptor} 
          handleDrop={(item) => this.handleDrop(item)}
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
