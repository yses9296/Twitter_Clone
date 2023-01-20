import React, { memo } from 'react';
import { Menu, MenuSection, MenuItem, LinkItem, Logo } from './style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Navigation = memo(() => {
  return (
    <Menu>
      <Logo to='/'>
        <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="3x" />
      </Logo>
      <MenuSection>
        <MenuItem>
          <LinkItem to='/'>
            <FontAwesomeIcon icon={faHouse} color="#000" size="lg" />            
          </LinkItem>
        </MenuItem>
        <MenuItem>
          <LinkItem to='/profile'>
            <FontAwesomeIcon icon={faUser} color="#000" size="lg" />  
          </LinkItem>
        </MenuItem>
      </MenuSection>
    </Menu>
  )
})

export default Navigation