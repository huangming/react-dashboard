import React from 'react'
import { Route } from 'react-router';

import B_A2_1 from '../../pages/cisp/B_A2_1.js'
import B_A3_1 from '../../pages/cisp/B_A3_1.js'

//Custom router item must be /app/xxxx
const customRouter = [
    {
        path: "/app/cisp",
        component: B_A2_1,
        routes: [
            {
                path: "/app/cisp/B-A2-1",
                component: B_A2_1,
                exact: true,
            },
            {
                path: "/app/cisp/B-A3-1",
                component: B_A3_1,
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
            return route.routes.map((item,index)=>{
              return <Route key={index} exact path={item.path} 
              render={props => (
                <item.component {...props} routes={item.routes} />
              )}
              />
            })
          }
        })
    )
}
export default CustomRoute
