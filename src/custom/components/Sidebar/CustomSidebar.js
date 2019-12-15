import React from 'react';

import LinksGroup from '../../../components/Sidebar/LinksGroup/LinksGroup';

function CustomMenu(props) {
  return (
      <LinksGroup
        header="Cisp"
        headerLink="/app/cisp"
        childrenLinks={[
          {
            name: 'B-A2-1',
            link: '/app/cisp/B-A2-1',
          },
          {
            name: 'B-A3-1',
            link: '/app/cisp/B-A3-1',
          },
        ]}
        glyph="components"
      />                               
  )
}

export default CustomMenu 
