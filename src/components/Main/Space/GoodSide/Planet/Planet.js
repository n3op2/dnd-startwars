import React from 'react';
import { ItemTypes } from '../../../../../Context';
import { DropTarget } from 'react-dnd';

import styled from 'styled-components';

const PlanetCont = styled.div`
  position: absolute;
  left: ${props => props.planet.x}px;
  top: ${props => props.planet.y}px;
  width: 50px;
  height: 50px;
`

const PlanetStyled = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  background-size: cover;
  background-color: ${props => props.isOver ? 'green' : ''}; 
  background-image: url(${props => props.planet.interceptor ? props.planet.interceptor.imgSrc : props.planet.imgSrc });
`

const PlanetTimer = styled.div`
  position: absolute;
  left: ${props => props.planet.x}px;
  top: ${props => props.planet.y - 15}px;
  color: white; 
`

const planetSource = {
  drop(props, monitor) {
    props.handleDrop(props.planet, monitor.getItem());
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  getItem: monitor.getItem()
});

const Planet = (props) => {
  const { isOver, connectDropTarget, planet} = props;

  return connectDropTarget(
    <div> 
      <PlanetTimer planet={planet}>
        {planet.interceptor ? planet.total : planet.name}
      </PlanetTimer>
      <PlanetCont planet={planet} >
        <PlanetStyled
          isOver={isOver}
          planet={planet} 
        />
      </PlanetCont>
    </div>
  )
}

export default DropTarget(
  ItemTypes.INTERCEPTOR, 
  planetSource, 
  collect
)(Planet);
