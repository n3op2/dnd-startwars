import React, { Fragment } from 'react';
import Space from './Space/Space';
//For testing, to remove later.
import { connect } from 'react-redux';

const Main = (props) => {
  return (
    <Fragment>
      <Space />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  planets: state.planets
});

export default connect(mapStateToProps)(Main);
