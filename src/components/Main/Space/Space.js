import React, { Fragment } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import styled from 'styled-components';

import DarkSide from './DarkSide/DarkSide';
import GoodSide from './GoodSide/GoodSide';

const Cosmos = styled.div`
  background-color: red;
  width: 100%;
  height: 500px;
`

const Space = (props) => {
  return (
    <Cosmos>
      <DarkSide />
      <GoodSide />
    </Cosmos>
  );
}

export default DragDropContext(HTML5Backend)(Space);
