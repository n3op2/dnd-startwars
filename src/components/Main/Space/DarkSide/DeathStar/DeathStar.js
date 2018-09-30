import React from 'react';
import styled from 'styled-components';

const Ship = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background-size: cover;
  background-image: url(${props => props.image});
  z-index: 1;
`

const DeathStar = (props) => <Ship image='/img/death-star.png'/>;

export default DeathStar;
