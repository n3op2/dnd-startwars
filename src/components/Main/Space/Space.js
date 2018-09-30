import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import styled from 'styled-components';

import DarkSide from './DarkSide/DarkSide';
import GoodSide from './GoodSide/GoodSide';

const Cosmos = styled.div`
  border: solid 1px black;
  position: relative;
  width: 100%;
  height: 500px;
  background-size: cover;
  background-image: url(${props => props.image});
`

const Space = (props) => {
  return (
    <Cosmos image='/img/stars.png'>
      <DarkSide />
      <GoodSide />
    </Cosmos>
  );
}

export default DragDropContext(HTML5Backend)(Space);
