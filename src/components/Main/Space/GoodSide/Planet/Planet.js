import React from 'react';
import { ItemTypes } from '../../../../../Context';
import { DropTarget } from 'react-dnd';

import styled from 'styled-components';

const PlanetStyled = styled.div`
  height: 50px;
  width: 50px;
  background-size: cover;
  background-color: ${props => props.isOver ? 'green' : ''}; 
  background-image: url(${props => props.planet.interceptor ? props.planet.interceptor.imgSrc : props.planet.imgSrc });
`

const planetSource = {
  drop(props, monitor) {
    props.handleDrop(props.planet, monitor.getItem());
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
});

const Planet = (props) => {
  const { isOver, connectDropTarget, planet } = props;

  return connectDropTarget(
    <div style={{ width: '50px', height: '50px' }}>
      <PlanetStyled
        isOver={isOver}
        planet={planet} 
      />
    </div>
  )
}

export default DropTarget(
  ItemTypes.INTERCEPTOR, 
  planetSource, 
  collect
)(Planet);
