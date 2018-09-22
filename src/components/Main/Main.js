import React, { Fragment } from 'react';
//For testing, to remove later.
import { connect } from 'react-redux';

const Main = (props) => {
  return (
    <Fragment>
      <h1>{props.planets[0].name}</h1>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  planets: state.planets
});

export default connect(mapStateToProps)(Main);
