import React, { Fragment } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import DarkSide from './DarkSide/DarkSide';
import GoodSide from './GoodSide/GoodSide';
import SidePanel from '../SidePanel/SidePanel';

const Space = (props) => {
  return (
    <Fragment>
      <SidePanel 
      />
      <DarkSide />
      <GoodSide />
    </Fragment>
  );
}

export default DragDropContext(HTML5Backend)(Space);
