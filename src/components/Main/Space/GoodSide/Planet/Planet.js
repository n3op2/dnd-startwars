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

const planetDropSpec = {
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
  const { isOver, getItem, connectDropTarget } = props;
  console.log('Planet: ', props.planet.interceptor);
  if(props.planet.interceptor){
    console.log('LANDED!');
  } else {
    console.log('FREE!');
  }
  return connectDropTarget(
    <div style={{ width: '50px', height: '50px' }}>
      <PlanetStyled
        isOver={isOver}
        planet={props.planet} 
      />
    </div>
  )
}

export default DropTarget(
  ItemTypes.INTERCEPTOR, 
  planetDropSpec, 
  collect
)(Planet);
