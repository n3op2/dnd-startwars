import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Menu from './Menu/Menu';
import actions from '../../../actions';

import { connect } from 'react-redux';

const SidePanel = (props) => {
  return (
    <div>
      <button 
        onClick={() => props.panelState(true)}
      >Options</button>
      <Drawer 
        anchor='right'
        open={props.panel.panel}
        onClose={() => props.panelState(false)}
      >
        <Menu />
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  panel: state.panel
});

const mapActionsToProps = {
  panelState: actions.updatePanelState
}

export default connect(mapStateToProps, mapActionsToProps)(SidePanel);
