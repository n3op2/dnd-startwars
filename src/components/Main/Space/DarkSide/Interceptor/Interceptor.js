import React, { Fragment } from 'react';
import { ItemTypes } from '../../../../../Context';
import { DragSource } from 'react-dnd';

import styled from 'styled-components';

const style = {
  shipSize: {
    width: '50px',
    height: '50px'
  }
}
const Ship = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover; 
  opacity: ${props => props.isDragging ? 0 : 1}
  background-image: url(${props => props.interceptor.imgSrc});
`

const interceptorSource = {
  beginDrag(props) {
    return props.interceptor;
  },
  endDrag(props, monitor, component) {
    if(!monitor.didDrop()) {
      return null;
    }
    return props.handleDrop(props.interceptor);
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const Interceptor = (props) => {
  const { connectDragSource, isDragging } = props;
  return connectDragSource(
    <div style={style.shipSize}>
      <Ship 
        isDragging={isDragging}
        interceptor={props.interceptor} 
      />
    </div>
  );
}

export default DragSource(
  ItemTypes.INTERCEPTOR, 
  interceptorSource, 
  collect
)(Interceptor);
