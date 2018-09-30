import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import styled from 'styled-components';

const MenuCont = styled.div`
  width: 200px;
  padding: 10px;
  height: auto;
`

const MenuTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`

const menuItems = [
  { name: 'Option1', id: 1 },
  { name: 'Reset', id: 2 },
  { name: 'GitHub', id: 3  }
];

const Menu = (props) => {
  return ( 
    <MenuCont>
      <MenuTitle>OPTIONS</MenuTitle>
      {menuItems.map((item, i) => {
        return (
          <MenuItem item={item} key={i} />
        );
      })}
    </MenuCont>
  );
}

export default Menu;
