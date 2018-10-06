import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Menu from './Menu/Menu';
import actions from '../../../actions';
import styled from 'styled-components';

import { connect } from 'react-redux';

const SideMenuButton = styled.div`
  display: ${props => props.panelState ? 'none' : 'block'}
  position: absolute;
  right: 0px;
  top: 45%;
  width: 30px;
  height: 30px;
  background-size: cover;
  background-image: url('/img/left-arrow.png');
  cursor: pointer;
  transition: all 0.5s;
  z-index: 110;
  &:hover {
    right: 10px;
  }
`

const SidePanel = (props) => {
  return (
    <div>
      <SideMenuButton onClick={() => props.panelState(true)} /> 
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
