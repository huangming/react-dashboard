import React from 'react'
import { Route } from 'react-router';

import Cisp from '../../pages/cisp/Cisp.js'

//Custom router item must be /app/xxxx
const customRouter = [
    {
        path: "/app/cisp",
        component: Cisp,
        routes: [
            {
                path: "/app/cisp/B-A2-1",
                component: Cisp,
                exact: true,
            },
        ]
    }

]

function CustomRoute(props) {
    return (
      customRouter.map((route,key)=>{
          if (route.exact){
            return <Route key={key} exact path={route.path}
            render={props => (
              <route.component {...props} routes={route.routes} />
            )}
            />
          }else{
            return <Route key={key} path={route.path}
            render={props => (
              <route.component {...props} routes={route.routes} />
            )}
            />
          }
        })
    )
}
export default CustomRoute
