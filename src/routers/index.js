import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routers } from './allRouters';

const Router = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Route>
          {routers.map((route, index) => {
            const Component = route.component;

            // Áp dụng PrivateRoute chỉ với route '/'
            const element =
              route.path === '/' ? (
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              ) : (
                <Component />
              );

            return <Route path={route.path} element={element} key={index} />;
          })}
        </Route>
      </Suspense>
    </React.Fragment>
  );
};

export default Router;
